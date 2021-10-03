const Order = require("../models/Order");
const Cart = require("../models/Cart.model");
const User = require("../models/User.model");

module.exports.orderControllers = {
  getOrder: async (req, res) => {
    try {
      const order = await Order.find({}, { products: 1, courier: 1 }).populate(
        "products.product"
      );

      res.json(order);
    } catch (e) {
      console.log(`ошибка в ордере ${e}`);
    }
  },
  getOrderOne: async (req, res) => {
    try {
      const data = await Order.findById(req.params.id).populate("product");
      res.json(data);
    } catch (e) {
      console.log(`ошибка при получении одного ${e.toString()}`);
    }
  },
  addOrder: async (req, res) => {
    try {
      const products = await Cart.find({}, { _id: 0, product: 1, amount: 1 });

      if (products.length === 0) {
        return false; // correct it
      }
      const order = await Order.create({ products });

      return res.json(order);
    } catch (e) {
      return console.log(`ошибка в ордере ${e}`);
    }
  },
  getOrderByCourier: async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      const data = await Order.find({ courier:user});

      return res.json(data);
    } catch (e) {
      return res.json(e.toString());
    }
  },
};
