const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const express = require('express');
const cors = require('cors');
const createError = require('http-errors');
const morgan = require('morgan');
require('dotenv').config();
const mongoose = require('mongoose');
const session = require('express-session');
const User = require('./api/models/user');
const Token = require('./api/models/token');


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('combined'));

// Configure the session middleware
app.use(session({
  secret: process.env.SESSION_SECRET, // Replace with your own secret key
  resave: false,
  saveUninitialized: true,
}));

// Initialize Passport and restore authentication state, if any, from the session.
app.use(passport.initialize());
app.use(passport.session());

// Passport Google OAuth Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.REDIRECT_URL,
},
function(accessToken, refreshToken, profile, done) {
  User.findOneAndUpdate(
    { googleId: profile.id },
    {
      $set: {
        name: profile.displayName,
        email: profile.emails[0].value,
        picture: profile.photos[0].value,
      },
    },
    { new: true, upsert: true, runValidators: true }
  )
  .then(user => {
    console.log(user); // Logging the user

    const token = new Token({
      userId: user._id,
      accessToken: accessToken,
      refreshToken: refreshToken,
      expiration: new Date(Date.now() + 3600000),
    });

    token.save()
      .then(() => {
        return done(null, user);
      })
      .catch(err => {
        console.error("Error during token saving:", err);
        return done(err);
      });
  })
  .catch(err => {
    console.error("Error during user fetch or update:", err);
    return done(err);
  });
}));

app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).send('Something broke!');
});


app.get('/api/auth/status', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({
      isAuthenticated: true,
      user: {
        id: req.user._id, // Make sure this matches the property you want to send for the user ID.
        name: req.user.name,
        avatar: req.user.picture // Correctly using 'picture' from the user model.
      }
    });
  } else {
    res.json({ isAuthenticated: false });
  }
});

app.use((req, res, next) => {
  console.log("Request Headers:", req.headers);
  console.log("Request Body:", req.body);
  next();
});

  

// Serialize user into the sessions
passport.serializeUser(function(user, done) {
  done(null, user._id);
});

// Deserialize user from the sessions
passport.deserializeUser(function(_id, done) {
  // Use promises with .then and .catch
  User.findById(_id)
    .then(user => {
      done(null, user);
    })
    .catch(err => {
      done(err, null);
    });
});


// Google OAuth routes
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
  // Successful authentication, redirect to the hero section of your SPA.
  res.redirect('http://localhost:3000/#hero-section');
});


// Logout route
app.get('/auth/logout', (req, res) => {
  req.logout(() => {
      res.redirect('/');
  });
});


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
  });
});

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});


// Use the MONGO_URI environment variable or a default connection string
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/fullstack";

mongoose.set("strictQuery", false);
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database Connection Established");

    // Now you can define the 'db' variable
    const db = mongoose.connection;

    db.on("error", console.error.bind(console, "MongoDB connection error:"));
    db.once("open", () => {
      console.log("Connected to MongoDB");
    });

    const port = process.env.PORT || 4000;
    app.listen(port, () => console.log("App listening on port " + port));
  })
  .catch((error) => {
    console.error("MongoDB Connection Error:", error);
  });

