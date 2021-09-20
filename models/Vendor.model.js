const mongoose = require("mongoose");

const vendorSchema = mongoose.Schema({
  storeName:String,
  name: String,
  price: Number,
  desc: String,
  store: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Store",
  },
  image: String,
  login:String,
  password:String,
  email:String
});

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;
