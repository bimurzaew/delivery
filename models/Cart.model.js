const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  amount: Number,
  // food:{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref:"Food"
  // }
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
