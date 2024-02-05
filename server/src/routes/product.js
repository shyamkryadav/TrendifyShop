const express = require("express");
router = express.Router();
const { CreateProduct, getAllProduct ,getProductById} = require("../controllers/product");
router.post("/products", CreateProduct);
router.get("/products", getAllProduct);
router.get("/products/:id", getProductById);
module.exports = router;
