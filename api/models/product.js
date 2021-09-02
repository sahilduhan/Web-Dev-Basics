const mongoose = require('mongoose');

const productSchem = mongoose.Schema({

    _Id = mongoose.types.objectId,
    name: string,
    price: number
})