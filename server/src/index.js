const express = require('express')
const app = express()
const cors = require('cors')
require("dotenv").config();
const port = process.env.PORT;
app.use(express.json());
app.use(cors())


// data base connection 
const connection = require('./db/connection')
const userRegister = require('./models/userRegister');
const userLogin = require('./models/userLogin');
const Product = require('./models/product');
const Category = require('./models/category');

connection() // db connect


app.post('/register', async (req, res) => {
    await userRegister.create(req.body);
})
    
app.post('/login', async (req, res) => {
    await userLogin.create(req.body);
})
app.post('/product', async (req, res) => {
    await Product.create(req.body);
})
app.get('/product', async (req, res) => {
    await Product.find();
})

app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/category', async (req, res) => {
    await Category.create(req.body);
})
    
    

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})