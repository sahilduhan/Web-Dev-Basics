const mongoose = require('mongoose');

const productSchem = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is mandatory'],
    },
    price: {
        type: Number,
        required: [true, 'Price is mandatory'],
        min: 0,
        max: 9999,
    }
})

module.exports = mongoose.model('Product', productSchem);