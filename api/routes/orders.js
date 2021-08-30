const express = require('express')
const router = express.Router();
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'orders taken'

    })
})
router.post('/orders', (req, res, next) => {
    res.status(201).json({
        message: 'orders are accepted'
    })
})
router.get('/:ordersId', (req, res, next) => {
    res.status(200).json({
        message: 'orders detail',
        orderId: req.params.ordersId
    })
})
router.delete('/:ordersId', (req, res, next) => {
    res.status(200).json({
        message: 'orders deleted',
        orderId: req.params.ordersId
    })
})
module.exports = router;