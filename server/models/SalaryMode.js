const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empSchema = new Schema({

    empId: { type: String },
    fName: { type: String },
    lName: { type: String },
    DOB: { type: String },
    email: { type: String },
    salary: { type: String },
    nic: { type: String, unique: true },
    date: { type: String },
    mobileNo: { type: Number },
    status: { type: String }

});

const Salary = mongoose.model('Salary', empSchema)
module.exports = Salary;