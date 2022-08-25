const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplySchema = new Schema({
    desc: {
        type: String,
        required: true
    },
    piece: {
        type: Number,
        required: true
    },
    user: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    }

}, {
    timestamp: true
});

const Supply = mongoose.model('Supply', supplySchema)

module.exports = Supply