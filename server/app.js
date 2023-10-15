const express = require('express');
const app = express();
const http = require('http');
const mongoose = require('mongoose');
require('dotenv').config(); 
const session = require('express-session');
const passport = require('passport');
require('./passport-config');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

require('dotenv').config();

// Set up session middleware
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET || 'fallback_secret',
  })
);

// Initialize passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Set up Google OAuth2.0 strategy

// Include and use the auth and user routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

app.use('/auth', authRoutes);
app.use('/user', userRoutes);

// Define your routes and middleware here

// Connect to your MongoDB database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handle MongoDB connection errors
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const server = http.createServer(app);

// Set up your routes and middleware here

const PORT = process.env.PORT || 4000; // Define the port

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
