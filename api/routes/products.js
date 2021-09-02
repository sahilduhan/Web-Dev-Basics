const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling get requests to ./products'
    })
})

router.post('/', (req, res, next) => {
    const products = {
        name: req.body.name,
        prices: req.body.prices
    }
    const product = Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        prices: req.body.prices
    })
    product.save().then(result => {
            console.log(result);
        })
        .catch(err => {
            console.error(err);

        })
    res.status(201).json({
        message: 'Handling post requests to ./products',
        createdProduct: products
    })
})

router.get('/:productID', (req, res, next) => {
    const id = req.params.productID;
    if (id == 'special') {
        res.status(200).json({
            message: 'You Discovered something special',
            id: id
        })
    } else {
        res.status(200).json({
            message: 'You passed an id'
        })
    }

})

router.patch('/:productID', (req, res, next) => {
    res.status(200).json({
        message: 'Product updated'
    })
})

router.delete('/:productID', (req, res, next) => {
    res.status(200).json({
        message: 'Product deleted!'
    })
})


module.exports = router;