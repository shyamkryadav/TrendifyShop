const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db/connection");
app.use(cors());
require("dotenv").config();
const port = process.env.PORT || 5000;
app.use(express.json());
connection(); // db connect

const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const categoryRoute = require("./routes/category");

app.use(userRoute);
app.use(productRoute);
app.use(categoryRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
