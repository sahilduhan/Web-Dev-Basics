const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');

const Order = require('../models/orders')

router.post('/', (req, res, next) => {
    const orders = new Order({
            _id: mongoose.Types.ObjectId,
            quantity: req.body.quantity,
            product: req.body.productID
        }).save()
        .exec()
        .then(result => { res.status(200).json(result); })
        .catch((err) => {
            res.status(300).json({
                error: err
            })
        })
})

router.get('/:ordersId', (req, res, next) => {
    const { ordersId } = req.params;
    if (!ordersId) return next(new Error('orders is mandatory'));
    return res.status(200).json({
        message: 'orders detail',
        orderId: req.params.ordersId
    })
})

router.delete('/:ordersId', (req, res, next) => {
    return res.status(200).json({
        message: 'orders deleted',
        orderId: req.params.ordersId
    })
})



module.exports = router;