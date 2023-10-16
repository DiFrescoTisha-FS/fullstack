const express = require('express');
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');
const User = require('./models/user');
const morgan = require('morgan');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const bodyParser = require('body-parser'); // Add this line

app.use(bodyParser.json());

app.use(morgan('dev')); // Use body parser before your routes

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET',
}));

// Connect to MongoDB
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Database Connection Established'));

// Passport Initialization
const passport = require('passport');

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

// Google OAuth Strategy
passport.use(new GoogleStrategy({
  clientID: '287299510870-78cld8ed4ih7vedf85vhmu9j1jglinpa.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: 'http://localhost:4000/auth/google/callback',
  scope: ['profile', 'email'],
}, function (accessToken, refreshToken, profile, done) {
  // Check if the user already exists in the database
  User.findOne({ googleId: profile.id })
    .then((existingUser) => {
      if (existingUser) {
        // Return the existing user if they exist in the database
        return done(null, existingUser);
      } else {
        // Create a new user if they don't exist in the database
        const newUser = new User({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
        });
        return newUser.save()
          .then((user) => {
            return done(null, user);
          })
          .catch((err) => {
            return done(err);
          });
      }
    })
    .catch((err) => {
      return done(err);
    });
}));

// Routes

// Google OAuth authentication route
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/error' }), (req, res) => {
  // Successful authentication, redirect to success page.
  res.redirect('/success');
});

// Example login route (you can customize this according to your needs)
app.post('/login', (req, res) => {
  // Your authentication logic goes here
  // Check if the user data sent from the frontend is valid

  const userObject = req.body.userObject; // Assuming the user data is sent as JSON in the request body

  // Check if userObject contains valid authentication data
  if (userObject && userObject.googleId) {
    // You can perform further checks here, such as verifying the user's Google ID
    // If the user is authenticated, you can send back user data

    const userData = {
      username: userObject.name,
      email: userObject.email,
      // Other user data as needed
    };

    res.json({ message: 'Authentication successful', user: userData });
  } else {
    // Authentication failed, respond with JSON error
    res.status(401).json({ message: 'Authentication failed', error: 'Invalid credentials' });
  }
});

// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log('App listening on port ' + port));
