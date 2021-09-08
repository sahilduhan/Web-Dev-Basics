const mongoose = require('mongoose');

const productSchem = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is mandatory'],
    },
    price: {
        type: Number,
        required: [true, 'Price is mandatory']
    },
    producImage: {
        type: String,
        required: [true, 'Product Image is required']
    }
})

module.exports = mongoose.model('Product', productSchem);