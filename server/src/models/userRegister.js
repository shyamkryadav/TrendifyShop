const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
  name: String, 
  email: String,
  password: String,
});

const UserAccount = mongoose.model('UserRegister', userSchema);
module.exports = UserAccount