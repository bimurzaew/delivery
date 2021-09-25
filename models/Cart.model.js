const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },

  amount: Number
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
