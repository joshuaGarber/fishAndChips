const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    title: {type: String},
    description: {type: String},
    price: {type: Number},
    image: {type: String}
});

module.exports = mongoose.model('Items', itemSchema);