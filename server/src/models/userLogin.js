const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const UserLogin = mongoose.model('UserLogin', userSchema);
module.exports = UserLogin