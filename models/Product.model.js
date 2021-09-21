const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  desc: String,
  image: String,
  storeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor",
  },
  category:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Category"
  }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
