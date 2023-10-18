const express = require('express');
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');
const User = require('./models/user');
const morgan = require('morgan');
const cors = require('cors');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const bodyParser = require('body-parser'); // Add this line

app.use(bodyParser.json());
// SignIn.j
app.use(morgan('dev')); // Use body parser before your routes

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SESSION_SECRET',
}));

// Enable CORS for specific origin (your frontend)
const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from your client's origin
};

app.use(cors(corsOptions));


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

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URL = process.env.REDIRECT_URL;

// Google OAuth Strategy
passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: REDIRECT_URL,
  scope: ['profile', 'email'],
}, function (accessToken, refreshToken, profile, done) {
  // Check if the user already exists in the database
  User.findOne({ googleId: profile.id })
    .then((existingUser) => {
      if (existingUser) {
        // Return the existing user if they exist in the database
        console.log('Existing user found:', existingUser);
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
            console.log('New user created:', user);
            return done(null, user);
          })
          .catch((err) => {
            console.error('Error saving new user:', err);
            return done(err);
          });
      }
    })
    .catch((err) => {
      console.error('Error querying user:', err);
      return done(err);
    });

  // Log the received userObject here
  console.log('Received userObject:', profile);
}));


// Routes

// Google OAuth authentication route
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/error' }), (req, res) => {
  // Successful authentication, redirect to success page.
  res.redirect('/dashboard');
});

// Example login route (you can customize this according to your needs)
app.post('/login', (req, res) => {

  console.log('Received userObject from client:', req.body.userObject);

  // Your authentication logic goes here

  const userObject = req.body.userObject;
  console.log('Received userObject:', userObject);  // Assuming the user data is sent as JSON in the request body

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

app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/dashboard');
});

// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log('App listening on port ' + port));
