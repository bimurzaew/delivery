const Order = require("../models/Order");
const Cart = require("../models/Cart.model");

module.exports.orderControllers = {
  getOrder: async (req, res) => {
    try {
      const order = await Order.find().populate("cart");

      res.json(order);
    } catch (e) {
      console.log(`ошибка в ордере ${e}`);
    }
  },
  addOrder: async (req, res) => {
    try {
      const products = await Cart.find({}, { product: 1 });

      const order = await Order.create({ product: products  });
      res.json(order);
    } catch (e) {
      console.log(`ошибка в ордере ${e}`);
    }
  },
};