const Order = require("../models/Order");
const Cart = require("../models/Cart.model");

module.exports.orderControllers = {
  getOrder: async (req, res) => {
    try {
      const order = await Order.find().populate("product");

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
      const products = await Cart.find().populate("product");

      const idProduct = products.map((item) => {
        return item.product;
      });

      if (products.length === 0) {
        return false;
      }
      const order = await Order.create({ product: idProduct });

      res.json(order);
    } catch (e) {
      console.log(`ошибка в ордере ${e}`);
    }
  },
};
