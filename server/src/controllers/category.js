const Category = require("../models/category");

const CreateCategory = async (req, res) => {
  try {
    await Category.create(req.body);
    res.json({
      msg: "Category Create successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllCategory = async (req, res) => {
  const data = await Category.find();
  res.json({ data });
};

module.exports = { CreateCategory, getAllCategory };
