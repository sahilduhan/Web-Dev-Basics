const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
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

module.exports = mongoose.model('Order', OrderSchema);