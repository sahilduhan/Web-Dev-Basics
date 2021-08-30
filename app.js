const express = require('express');
const app = express();
const prodctRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/orders')
app.use('/products', prodctRoutes);
app.use('/orders', orderRoutes);
module.exports = app;