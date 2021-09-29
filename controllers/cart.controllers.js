const Cart = require("../models/Cart.model");
const Product = require("../models/Product.model");

module.exports.cartController = {
  getCart: async (req, res) => {
    const data = await Cart.find().populate("product");
    console.log(data)
    res.json(data);
  },
  plusAmountCart: async (req, res) => {
    try {
      const amount = await Cart.findById(req.params.id).populate("product");
      const product = await Product.findById(amount.product.id);

      if (product.amount > 0) {
        await Product.findByIdAndUpdate(amount.product.id, {
          amount: product.amount - 1,
        });

        const data = await Cart.findByIdAndUpdate(req.params.id, {
          amount: amount.amount + 1,
        });
        res.json(data);
      }
    } catch (e) {
      console.log(`ошибка при изменении кол-во ${e}`);
    }
  },
  minusAmountCart: async (req, res) => {
    try {
      const amount = await Cart.findById(req.params.id).populate("product");
      const product = await Product.findById(amount.product.id);

      if (amount.amount > 1) {
        await Product.findByIdAndUpdate(amount.product.id, {
          amount: product.amount + 1,
        });

        const data = await Cart.findByIdAndUpdate(req.params.id, {
          amount: amount.amount - 1,
        });
        res.json(data);
      }
    } catch (e) {
      console.log(`ошибка при изменении кол-во ${e}`);
    }
  },
  addProductToCart: async (req, res) => {
    try {
      const { product, amount = 1 } = req.body;

      const box = await Cart.create({ product, amount });

      const find = await Cart.findById(box.id).populate("product");
      const productEdit = await Product.findByIdAndUpdate(find.product.id, {
        amount: find.product.amount - 1,
      });

      console.log(productEdit);
      res.json(find);
    } catch (e) {
      console.log(`ошибка при добавлении в корзину ${e}`);
    }
  },

  deleteProductFromCart: async (req, res) => {
    const amount = await Cart.findById(req.params.id).populate("product");
    const product = await Product.findById(amount.product.id);

    await Product.findByIdAndUpdate(product.id, {
      amount: amount.amount + product.amount,
    });

    await Cart.findByIdAndRemove(req.params.id);

    res.json("ok");
  },
};
