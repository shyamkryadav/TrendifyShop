const Product = require("../models/product");

const CreateProduct = async (req, res) => {
    try {
      await Product.create(req.body);
      res.json({
        msg: "Product Create successfully",
      });
    } catch (err) {
      console.log(err);
    }
  };
  

  const getAllProduct = async (req, res) => {
    const data = await Product.find();
    res.json({ data });
  };

  const getProductById = async (req, res) => {
    const data = await Product.findById(req.params.id);
    res.json({ data });
  };

  

module.exports = { CreateProduct,getAllProduct,getProductById};
