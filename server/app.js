require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const { OAuth2Client } = require('google-auth-library');
const cors = require('cors');
const winston = require('winston');
const axios = require('axios');
const Token = require('./api/models/token'); // Adjust the path as needed
const User = require('./api/models/user'); // Adjust the path as needed

const app = express();

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logfile.log' })
  ]
});

app.use((err, req, res, next) => {
  logger.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});


app.use(cors());
app.use(express.json());

const oAuth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'postmessage',
);

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/fullstack';

mongoose.set('strictQuery', false);
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    logger.info('Database Connection Established');

    const db = mongoose.connection;

    db.on('error', error => {
      logger.error('MongoDB connection error:', error);
    });
    db.once('open', async () => {
      logger.info('Connected to MongoDB');

      // Define the authentication route
      app.post('/auth/google', async (req, res) => {
        try {
          const { code, idToken } = req.body;
          logger.info('Received code:', code);
          logger.info('Received idToken:', idToken);

          const { tokens } = await oAuth2Client.getToken(code);
          logger.info('Tokens:', tokens);

          const { sub, email, name, picture } = await verifyIdToken(idToken);
          logger.info('User Information:', sub, email, name, picture);

          logger.info('Authentication request received.');
          logger.error('An error occurred during authentication.');
          logger.warn('Unexpected data received in the request.');

          // Save the tokens and user information to the database
          const token = new Token({
            accessToken: tokens.access_token,
            refreshToken: tokens.refresh_token,
            expiresAt: tokens.expiry_date,
            userId: sub,
          });
          await token.save();

          const user = new User({
            userId: sub,
            email,
            name,
            picture,
          });
          await user.save();

          // Process the tokens
          const result = await processTokens(tokens, idToken); // Pass idToken instead of tokens.access_token

          res.status(200).json(result);
        } catch (error) {
          logger.error('Error during authentication:', error);
          res.status(500).json({ error: 'Internal server error' });
        }
      });
    });
  })
  .catch((error) => {
    console.error('MongoDB Connection Error:', error);
  });

async function verifyIdToken(idToken) {
  try {
    const ticket = await oAuth2Client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const { sub, email, name, picture } = payload;
    return { sub, email, name, picture };
  } catch (error) {
    console.error('Error verifying ID token:', error);
    throw error;
  }
}

async function processTokens(tokens, idToken) {
  try {
    console.log('Processing tokens. Access token:', tokens.access_token);
    const payload = await verifyIdToken(idToken);
    const { sub, email, name, picture } = payload;

    // Use the access token in your code
    console.log(tokens.access_token);

    // Example: Save the user information to the database
    const user = new User({
      sub,
      email,
      name,
      picture,
    });
    await user.save();

    // Example: Make an API call using the access token
    const response = await axios.get('http://localhost:4000/auth/google', {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
      },
    });
    const responseData = response.data;

    // Example: Send a response back to the client
    return { message: 'Tokens processed successfully' };

  } catch (error) {
    console.error('Error processing tokens:', error);
    throw error;
  }
}

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
