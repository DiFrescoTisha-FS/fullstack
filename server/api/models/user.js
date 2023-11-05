const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    unique: true,
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
  // Add a field to store references to tokens
  tokens: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Token',
    },
  ],
  // Add more fields as needed for your user data
});

module.exports = mongoose.model('User', userSchema);
