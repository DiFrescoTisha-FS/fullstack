// auth.js
const express = require('express');
const passport = require('passport');
const router = express.Router();

// Google authentication route
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google callback route
router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login', // Redirect to login page on failure
    successRedirect: '/user', // Redirect to user profile on success
  })
);

// Logout route
router.get('/logout', (req, res) => {
  req.logout(); // Log out the user
  res.redirect('/'); // Redirect to the home page
});

module.exports = router;