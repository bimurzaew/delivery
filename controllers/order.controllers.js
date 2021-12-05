const nodemailer = require("nodemailer");
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
      const data = await Order.findById(req.params.id).populate(
        "products.product"
      );
      res.json(data);
    } catch (e) {
      console.log(`ошибка при получении одного ordera ${e.toString()}`);
    }
  },
  addOrder: async (req, res) => {
    try {
      const products = await Cart.find({}, { _id: 0, product: 1, amount: 1 });

      if (products.length === 0) {
        return false; // correct it
      }
      const order = await Order.create({ products, email: req.body.email });

      return res.json(order);
    } catch (e) {
      return console.log(`ошибка в ордере ${e}`);
    }
  },
  getOrderByCourier: async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      const data = await Order.find({ courier: user }).populate(
        "products.product"
      );

      return res.json(data);
    } catch (e) {
      return res.json(e.toString());
    }
  },
  completeOrder: async (req, res) => {
    try {
      const orderEmail = await Order.findById(req.params.id);
      const transporter = await nodemailer.createTransport({
        host: "smtp.mail.ru",
        port: 465,
        secure: true,
        auth: {
          user: "dukvaha1997@mail.ru",
          pass: "11223344Dd.",
        },
      });

      await transporter.sendMail({
        from: "dukvaha1997@mail.ru",
        to: orderEmail.email,
        subject: "Даар дукх",
        text: `заказ готов иди забирай`,
        html: `<h1>Хьо ву ма бох мец.</h1>
               <h2>Дада хьа кхаьчча яум</h2>`,
      });

      await Order.findByIdAndRemove(req.params.id);

      const order = await Order.create([]);

      res.json(order);
    } catch (e) {
      res.json(`ошибка при удалении ордера ${e.toString()}`);
    }
  },
};
