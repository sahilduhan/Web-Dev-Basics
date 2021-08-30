const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling get requests to ./products'
    })
})
router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling post requests to ./products'
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