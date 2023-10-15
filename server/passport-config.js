const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = require('./models/user'); // Adjust the path to your user model

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/google/callback', // Update with your callback URL
    },
    function (accessToken, refreshToken, profile, done) {
      console.log('Received Google OAuth response');
      console.log('Access Token:', accessToken);
      console.log('Refresh Token:', refreshToken);
      console.log('Profile:', profile);

      // Implement your user creation or retrieval logic here
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        if (err) {
          // Handle the error, e.g., log it
          console.error('Error saving user:', err);
          return done(err);
        }

        // Return the user object after creating or retrieving
        console.log('User saved:', user);
        user.name = profile.displayName; // Change to user.name to match your model
        user.email = profile.emails[0].value;
        user.picture = profile.photos[0].value;

        user.save(function (err) {
          if (err) {
            // Handle the error, e.g., log it
            console.error('Error saving user:', err);
            return done(err);
          }
          return done(null, user);
        });
      });
    }
  )
);

// Serialize and deserialize user data (customize as needed)
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
