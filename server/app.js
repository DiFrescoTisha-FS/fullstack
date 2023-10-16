/*  EXPRESS */
const express = require('express');
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');
const User = require('./models/user'); 
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET',
}));

app.get('/', function(req, res) {
  res.render('pages/auth');
});

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Database Connection Established'));

app.get('/', function(req, res) {
	res.render('auth'); // Render the 'auth.ejs' template
  });


const port = process.env.PORT || 4000;
app.listen(port , () => console.log('App listening on port ' + port));


var passport = require('passport');
var userProfile;
 
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});
 
app.get('/success', (req, res) => {
	if (!req.user) {
	  // Handle the case when user data is not available
	  return res.redirect('/error');
	}
  
	const user = req.user; // Use req.user to get the user data
  
	res.render('pages/success', { user });
  });
app.get('/error', (req, res) => res.send("error logging in"));
 
passport.serializeUser(function(user, cb) {
  cb(null, user);
});
 
passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});


/*  Google AUTH  */
 
// ...

passport.use(new GoogleStrategy({
	clientID: '287299510870-78cld8ed4ih7vedf85vhmu9j1jglinpa.apps.googleusercontent.com',
	clientSecret: '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',
	callbackURL: 'http://localhost:4000/auth/google/callback',
	scope: ['profile', 'email'], // Specify 'email' scope
  }, function(accessToken, refreshToken, profile, done) {
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
			name: profile.displayName, // Use 'name' for the user's display name
			email: profile.emails[0].value, // Get the first email from the array
			// Other user fields as needed
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
  


 
// ...

  
 
app.get('/auth/google', 
  passport.authenticate('google', { scope : ['profile', 'email'] }));
 
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/error' }),
  function(req, res) {
    // Successful authentication, redirect success.
    res.redirect('/success');
  });