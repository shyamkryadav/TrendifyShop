const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  stock:Number,
  description: String,
  category: String,
  imageUrl: String,
});

const Product = mongoose.model("Products", productSchema);
module.exports = Product;


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
