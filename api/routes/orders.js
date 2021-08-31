const express = require('express')
const router = express.Router();


router.post('/', (req, res, next) => {
    return res.status(201).json({
        message: 'orders are accepted'
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