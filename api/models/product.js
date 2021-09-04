const mongoose = require('mongoose');

const productSchem = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is mandatory'],
    },
    price: {
        type: Number,
        required: [true, 'Price is mandatory']
    }
})

module.exports = mongoose.model('Product', productSchem);