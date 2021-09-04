const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');

const Order = require('../models/orders')

router.get('/', (req, res, next) => {
    Order.find().
    exec()
        .then(docs => { res.status(200).json(docs) })
        .catch((err) => {
            res.status(404).json({})
            error: err;
        })
})

router.post('/', (req, res, next) => {
    Product.findById(req.body.productID)
        .then(Product => {
            if (!Product) {
                res.status(404).json({ message: 'Product not exist' })
            }
            const orders = new Order({
                _id: mongoose.Types.ObjectId,
                quantity: req.body.quantity,
                product: req.body.productID
            })
            return orders
                .save()
                .then(result => { res.status(200).json(result); })
                .catch((err) => {
                    res.status(300).json({
                        error: err
                    })
                });
        });
});

router.get('/:ordersId', (req, res, next) => {
    Order.findById(req.params.ordersId)
        .exec()
        .then(orders => {
            res.status(200).json({
                orders: orders
            })
        })
        .catch((err) => {
            res.status(500).json({ error: err })
        })
})

router.delete('/:ordersId', (req, res, next) => {


})



module.exports = router;