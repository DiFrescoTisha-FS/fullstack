const express = require('express');
const router = express.Router(); // Create a new router
const Token = require('../models/token');

// Handle the route for creating a new token
router.post('/tokens', async (req, res) => {
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

module.exports = router; // Export the router
