const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  desc: String,
  image: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  category:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Category"
  },
  amount:Number,
  business:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Business"
  }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
