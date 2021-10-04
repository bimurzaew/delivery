const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  products: [
    {
      _id: false,
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      amount: Number
    }
  ],
  courier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Courier",
  },
  email:String
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
