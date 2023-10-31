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

    // Define the startServer function
    function startServer() {
      logger.info('Connected to MongoDB');

      app.post('/tokensignin', async (req, res) => {
        const { idToken } = req.body;
        
        // Verify the ID token
        const ticket = await oAuth2Client.verifyIdToken({
          idToken: idToken,
          audience: process.env.GOOGLE_CLIENT_ID,
        });
      
        const payload = ticket.getPayload();
        
        // Get the user data from the payload
        const { sub, name, email, picture } = payload;
      
        // Find a user with this Google ID and update their data,
        // or create a new user if no user with that Google ID exists
        const user = await User.findOneAndUpdate(
          { googleId: sub },
          {
            googleId: sub,
            name: name,
            email: email,
            picture: picture,
          },
          { upsert: true, new: true }
        );
        
        res.json({ message: 'User signed in successfully' });
      });

      app.post('/auth/google', async (req, res) => {
        try {
          const { tokens } = await oAuth2Client.getToken(req.body.code); // Exchange code for tokens
          console.log(tokens);
      
          // Fetch user data from Google using tokens (if needed)
          const { id_token } = tokens;
          const ticket = await oAuth2Client.verifyIdToken({
            idToken: id_token,
            audience: process.env.CLIENT_ID,
          });
          const payload = ticket.getPayload();
          // Extract user data from the payload (sub, name, email, picture)
      
          // Store tokens and user data in your MongoDB database
          const user = await User.findOneAndUpdate(
            { googleId: payload.sub },
            {
              googleId: payload.sub,
              name: payload.name,
              email: payload.email,
              picture: payload.picture,
              // Add other user data as needed
            },
            { upsert: true, new: true }
          );
      
          res.json({ tokens, user });
        } catch (error) {
          console.error('Error handling /auth/google POST request:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      });      
      
      const port = process.env.PORT || 4000;

      app.listen(port, () => {
        console.log(`App listening on port ${port}`);
      });
    }

    // Check if the connection is already open
    if (db.readyState === 1) {
      startServer();
    } else {
      db.once('open', startServer);
    }
});
