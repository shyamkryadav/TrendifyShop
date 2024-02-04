const express = require("express");
router = express.Router();
const { CreateProduct, getAllProduct } = require("../controllers/product");
router.post("/products", CreateProduct);
router.get("/products", getAllProduct);
module.exports = router;
