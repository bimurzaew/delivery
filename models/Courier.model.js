const mongoose = require("mongoose");

const courierSchema = mongoose.Schema({
    name:String,
    login:String,
    password:String,
    role:String

})

const Courier = mongoose.model("Courier", courierSchema);

module.exports = Courier;