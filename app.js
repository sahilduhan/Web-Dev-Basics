const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

// route definitions
app.use('/products', require('./api/routes/products'));
app.use('/orders', require('./api/routes/orders'));

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