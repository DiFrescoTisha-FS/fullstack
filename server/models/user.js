const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    },
    picture: {
        type: String,
  }, 
  
  // Add more fields as needed for your user data
});

module.exports = mongoose.model('User', userSchema);
