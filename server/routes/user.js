// user.js
const express = require('express');
const router = express.Router();

// User profile route
router.get('/', (req, res) => {
  // Check if the user is authenticated
  if (req.isAuthenticated()) {
    // Return user profile data or render a user profile page
    const userProfile = req.user;
    res.json(userProfile);
  } else {
    // Redirect to the login page if the user is not authenticated
    res.redirect('/login');
  }
});

module.exports = router;

