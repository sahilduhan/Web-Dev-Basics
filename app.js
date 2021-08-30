const express = require('express');
const app = express();
const morgan = require('morgan');
const prodctRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/orders')
app.use(morgan('dev'));
app.use('/products', prodctRoutes);
app.use('/orders', orderRoutes);
app.use((req, res, next) => {
    const error = new Error('Error 404, Not Found')
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})
module.exports = app;