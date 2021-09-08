const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');
const multer = require('multer');
const diskStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads')
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + file.filename)
    }
})
const upload = multer({
    storage: diskStorage,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
});




router.get('/', (req, res, next) => {
    Product.find()
        .exec()
        .then(docs => {
            res.status(200).json(docs);
        }).catch((err) => {
            res.status(404).json({ error: err });
        });
})

router.post('/', upload.single('ProductImage'), (req, res, next) => {
    // console.log(req.file);
    const _product = req.body;
    productImage: req.file.path;
    const product = Product(_product)
    product.save().then(result => {
        res.status(201).json({
            message: 'Product created successfully',
            creaedProduct: {
                name: result.name,
                price: result.price,
                _id: result.id,
                request: {
                    URL: 'http://localhost:3000/products' + result.id
                }
            }
        });
    }).catch(err => {
        console.error(err);
        res.status(500).json({ error: err })
    })
})

router.get('/:productID', (req, res, next) => {
    const id = req.params.productID;
    Product.select('name price id').findById(id).exec().then((doc) => {
        if (doc) res.status(200).json(doc);
        else res.status(404).json({ message: "No valid entery" })
    }).catch((err) => {
        res.status(500).json({ error: err });
    })
})

router.patch('/:productID', (req, res, next) => {
    const id = req.params.productID;
    const updateOps = {};
    for (const ops of req.body) updateOps[ops.propName] = ops.value;
    Product.update({ id: id }, { $set: updateOps }).exec(), then(result => {
        res.status(200).json(result);
    }).catch(err => {
        error: err;
    })
})


router.delete('/:productID', (req, res, next) => {
    const id = req.params.productID;
    Product.remove({
            _id: id
        }).exec()
        .then((result) => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(404).json({
                error: err,
                message: 'Product not found in the database'
            })
        })
})


module.exports = router;