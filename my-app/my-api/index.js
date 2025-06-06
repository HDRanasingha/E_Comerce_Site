const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the E-Commerce API' });
});

// Sample products endpoint
app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Product 1', price: 99.99, description: 'Description for product 1' },
    { id: 2, name: 'Product 2', price: 149.99, description: 'Description for product 2' },
    { id: 3, name: 'Product 3', price: 199.99, description: 'Description for product 3' }
  ];
  
  res.json(products);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});