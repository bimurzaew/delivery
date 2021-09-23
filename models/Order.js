const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  product: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  courier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Courier",
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
