const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

const mongoose = require('mongoose');

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

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origins", "*");

    res.header("Access-Control-Allow-Headers", "Origin, X-requested with, content-type, accept, authorisation")

    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", 'POST, PUT, POST, DELETE')
        return res.status(200).json({});
    }
    next();
});

module.exports = app;