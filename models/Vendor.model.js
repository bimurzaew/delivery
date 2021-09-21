const mongoose = require("mongoose");

const vendorSchema = mongoose.Schema({
  storeName:String,
  login:String,
  password:String,
  email:String
});

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;
