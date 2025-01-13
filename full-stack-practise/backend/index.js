const express = require('express')
const mongoose = require('mongoose');
const app = express();
const port = 3000

const {Schema} = mongoose;

const ProductSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  category: {type: String, required: true},
  imageUrl: {type: String, required: true},
  price: {type: Number, required: true}
})

const ProductModel = mongoose.model('hello', ProductSchema)

app.get('/products', async(req, res) => {
  try {
    const products = await ProductModel.find({})
    res.status.send({data: products, message: 'success'})
    console.log(products);
    
  } catch (error) {
    res.status(500).send({message: error.message})
  }e
})



app.get('/products/:id', (req, res) => {})
app.delete('/products/:id', (req, res) => {})
app.post('/products', (req, res) => {})








mongoose.connect('mongodb+srv://narminjabbar:narmin2005@cluster0.qce9h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('Connected!')
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}, url is http://localhost:${port}`)
    })
});