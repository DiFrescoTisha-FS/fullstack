const express = require('express');
const router = express.Router();

// User profile route
router.get('/', (req, res) => {
  // Check if the user is authenticated
  if (req.isAuthenticated()) {
    // Return user profile data as JSON
    const userProfile = req.user;
    res.json(userProfile);
  } else {
    // Redirect to the login page if the user is not authenticated
    res.status(401).json({ error: 'Unauthorized' });
  }
});

module.exports = router;
