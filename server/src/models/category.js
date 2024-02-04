const mongoose = require("mongoose");
const categorySchema  = new mongoose.Schema({
  name: String,
  description: String,
});

const Category  = mongoose.model("Category ", categorySchema );
module.exports = Category;



// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// const userSchema = new Schema({
//   fullName: { type: String, required: true },
//   phoneNumber: { type: String, required: true, unique: true },
//   email: String,
//   password: String,
// });

// const User = mongoose.model("User", userSchema);
// module.exports = User;
