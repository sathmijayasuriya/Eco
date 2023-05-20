const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empSchema = new Schema({

    Id: { type: String },
    fName: { type: String },
    city: { type: String },
    email: { type: String },
    kilowatthour: { type: String },
    telephone: { type: Number },
    message: { type: String }

});

const bill = mongoose.model('bill', empSchema)
module.exports = bill;