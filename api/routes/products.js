const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');

router.get('/', (req, res, next) => {
    Product.find()
        .exec()
        .then(docs => {
            console.log(docs), res.status(200).json(docs);
        }).
    catch((err) => {
        console.log(err), res.status(404).json({
            error: err
        });
    });
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
        res.status(201).json({
            message: 'Handling post requests to ./products',
            createdProduct: products
        })
    }).catch(err => {
        console.error(err);
        res.status(500).json({ error: err })

    })
})

router.get('/:productID', (req, res, next) => {
    const id = req.params.productID;
    Product.findById(id).exec().then((doc) => {
        console.log(doc => {
            console.log("Recieved from database", doc);
        });
        if (doc) res.status(200).json(doc);
        else res.status(404).json({ message: "No valid entery" })
    }).catch((err) => {
        console.error(err), res.status(500).json({ error: err });
    })
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