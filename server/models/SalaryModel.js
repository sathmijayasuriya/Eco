//charli Salary

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SalarySchema = new Schema({

    empId: {
        type: String,
    },

    fName: {
        type: String,
    },

    lName: {
        type: String,
    },

    DOB: {
        type: String,

    },

    email: {
        type: String,
    },

    salary: {
        type: String,
    },

    nic: {
        type: String,
    },

    date: {
        type: String,
    },

    mobileNo: {
        type: String,
    },

    status: {
        type: String,
    },


})


const Salary = mongoose.model("Salary", SalarySchema);

module.exports = Salary;