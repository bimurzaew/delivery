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
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
