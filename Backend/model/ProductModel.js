//charli Product

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({

    ProductID: {
        type: String,
    },

    ProductName: {
        type: String,
    },

    ProductPrice: {
        type: String,
    },

    Capacity: {
        type: String,

    },

    Voltage: {
        type: String,
    },

    Weight: {
        type: String,
    },

    Material: {
        type: String,
    },

    Warranty: {
        type: String,
    },

    MountingType: {
        type: String,
    },

    AdditionalFeatures: {
        type: String,
    },


})


const Product = mongoose.model("Product", productSchema);

module.exports = Product;