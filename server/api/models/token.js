const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  userId: String,
  accessToken: String,
  refreshToken: String,
  expiration: Date,
});

const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;
