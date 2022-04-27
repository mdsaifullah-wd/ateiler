const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

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

    // Get main categories
    app.get('/mainCategories', async (req, res) => {
      const query = {};
      const cursor = mainCategories.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    // Get All Products
    app.get('/products', async (req, res) => {
      const page = parseInt(req.query.page);
      const products = parseInt(req.query.products);
      const query = {};
      const options = {
        projection: { _id: 1, title: 1, price: 1, image1: 1 },
      };
      const cursor = productCollection
        .find(query, options)
        .skip(page * products)
        .limit(products);
      const result = await cursor.toArray();
      res.send(result);
    });
    // Get Number of All Products
    app.get('/products/count', async (req, res) => {
      const query = {};
      const result = await productCollection.countDocuments(query);
      res.send({ result });
    });

    // Get products by main category
    app.get('/products/:mainCategory', async (req, res) => {
      const { mainCategory } = req.params;
      const page = parseInt(req.query.page);
      const products = parseInt(req.query.products);
      const query = {
        mainCategory: mainCategory,
      };
      const options = {
        projection: { _id: 1, title: 1, price: 1, image1: 1 },
      };
      const cursor = productCollection
        .find(query, options)
        .skip(page * products)
        .limit(products);
      const result = await cursor.toArray();
      res.send(result);
    });
    // Get the Number of products by main category
    app.get('/products/:mainCategory/count', async (req, res) => {
      const { mainCategory } = req.params;
      const query = {
        mainCategory: mainCategory,
      };
      const result = await productCollection.countDocuments(query);
      res.send({ result });
    });

    // Get products by product category
    app.get('/products/:mainCategory/:productCategory', async (req, res) => {
      const { mainCategory, productCategory } = req.params;
      const page = parseInt(req.query.page);
      const products = parseInt(req.query.products);
      const query = {
        mainCategory: mainCategory,
        productCategory: productCategory,
      };
      const options = {
        projection: { _id: 1, title: 1, price: 1, image1: 1 },
      };
      const cursor = productCollection
        .find(query, options)
        .skip(page * products)
        .limit(products);
      const result = await cursor.toArray();
      res.send(result);
    });

    // Get the Number of products by product category
    app.get(
      '/products/:mainCategory/:productCategory/count',
      async (req, res) => {
        const { mainCategory, productCategory } = req.params;
        const query = {
          mainCategory: mainCategory,
          productCategory: productCategory,
        };
        const result = await productCollection.countDocuments(query);
        res.send({ result });
      }
    );

    // Get Product Details
    app.get('/product-details/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await productCollection.findOne(query);
      res.send(result);
    });
  } finally {
  }
};
run().catch((err) => console.dir(err));

// test
app.get('/', (req, res) => {
  res.send('test api endpoint');
});

// Server Listen
app.listen(port, () => {
  console.log('Server Running...');
});
