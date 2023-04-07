//Kaveen Vehicle

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const vehicleSchema = new Schema({

    VId: {
        type: String,
    },

    VehicleRegNo: {
        type: String,
    },

    VehicleModel: {
        type: String,

    },

    VehicleType: {
        type: String,
    },

    VehicleBrand: {
        type: String,
    },

    Mileage: {
        type: Number,
    },

    InsType: {
        type: String,
    },

    InsComName: {
        type: String,
    },

    Transmission: {
        type: String,
    },

    AirC: {
        type: String,
    },

    NoOfSeats: {
        type: String,
    },

    RatePDay: {
        type: Number,
    },

    YearsRent: {
        type: String,
    },

    nic: { 
        type: String, 
        unique: true 
    },

    // vehPic: {
    //     type: String,
    // },

    // vehDoc: {
    //     type: String,
    // },

})


const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;