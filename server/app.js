const cors = require('cors');
const express = require('express');
const createError = require("http-errors");
const morgan = require('morgan');
require('dotenv').config();
const mongoose = require('mongoose');
const { OAuth2Client } = require('google-auth-library');
const axios = require('axios');
const tokensRouter = require('./api/routes/tokens');
const Token = require('./api/models/token'); // Make sure the path is correct



const app = express();

app.use(cors()); // Place cors middleware at the top
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// Apply the tokensRouter for the '/api/tokens' path
app.use('/api/tokens', tokensRouter);


const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET)

async function verifyToken(token) {
  try {
    console.log('Received token:', token); // Debugging line
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const userId = payload.sub;

    // Now you can use the payload data as needed
    console.log('Payload:', payload); // Debugging line

    // Return user ID or other relevant data
    return userId;
  } catch (error) {
    console.error('Google OAuth verification error:', error);
    throw error;
  }
}


// Example usage:
const googleToken = process.env.GOOGLE_TOKEN;

verifyToken(googleToken)
  .then((userId) => {
    // Handle successful verification
    console.log('Verified user ID:', userId);
  })
  .catch((error) => {
    // Handle verification error
    console.error('Verification error:', error);
  });

app.get("/", async (req, res, next) => { 
  res.send({ message: "Awesome it works" })
})

const verify = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader ? authHeader.split(' ')[1] : undefined;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const userId = await verifyToken(token);
    // If the token is valid, store user information in the request for later use
    req.user = userId;
    next();
  } catch (error) {
    console.error('Verification error:', error);
    return res.status(401).json({ message: 'Unauthorized' });
  }
};


app.get("/protected", verify, async (req, res, next) => {
  // If you reach here, the token is valid, and req.user contains the user ID
  res.send({ message: 'Access granted' });
});

// ... Other middleware and route setups ...

// Handle the route for creating a new token
app.post('/api/tokens', async (req, res) => {
  try {
    // In a real scenario, you would get these values from the client or generate them dynamically
    const { userId, accessToken, refreshToken, expiration } = req.body;

    // Create a new token document
    const newToken = new Token({
      userId,
      accessToken,
      refreshToken,
      expiration: new Date(expiration),
    });

    // Save the new token document
    await newToken.save();

    res.status(201).json({ message: 'Token created successfully' });
  } catch (error) {
    console.error('Error saving token:', error);
    res.status(500).json({ error: 'Error creating token' });
  }
});

// ... Rest of your code ...


// Use the MONGO_URI environment variable or a default connection string
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/fullstack';

mongoose.set('strictQuery', false);
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database Connection Established');
    
    // Now you can define the 'db' variable
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
      console.log('Connected to MongoDB');
    });

    const port = process.env.PORT || 4000;
    app.listen(port, () => console.log('App listening on port ' + port));
  })
  .catch((error) => {
    console.error('MongoDB Connection Error:', error);
  });


