const express = require("express");
router = express.Router();

const { CreateCategory, getAllCategory } = require("../controllers/category");
router.post("/category", CreateCategory);
router.get("/category", getAllCategory);
module.exports = router;
