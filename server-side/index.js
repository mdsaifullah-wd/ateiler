const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.local || 3001;

// Use Middleware
app.use(cors());
app.use(express.json());

// MongoDB

const uri = `mongodb+srv://${process.env.USER_ID}:${process.env.USER_PASSWORD}@cluster0.puuod.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

// To create client with secret uri
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
const run = async () => {
  try {
    client.connect();
    const productCollection = client.db('ateiler').collection('products');
    const mainCategories = client.db('ateiler').collection('mainCategory');

    // Get All Products
    app.get('/products', async (req, res) => {
      const query = {};
      const cursor = productCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    // Get main categories
    app.get('/mainCategories', async (req, res) => {
      const query = {};
      const cursor = mainCategories.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    // Get products by main category
    app.get('/product/:mainCategory', async (req, res) => {
      const { mainCategory } = req.params;
      const query = {
        mainCategory: mainCategory,
      };
      const cursor = productCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    // Get products by product category
    app.get('/product/:mainCategory/:productCategory', async (req, res) => {
      const { mainCategory, productCategory } = req.params;
      const query = {
        mainCategory: mainCategory,
        productCategory: productCategory,
      };
      const cursor = productCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });
  } finally {
  }
};
run().catch((err) => console.dir(err));
// Server Listen
app.listen(port, () => {
  console.log('Server Running...');
});
