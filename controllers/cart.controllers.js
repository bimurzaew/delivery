const Cart = require("../models/Cart.model");

module.exports.cartController = {
  getCart: async (req, res) => {
    const data = await Cart.find().populate("product")
    res.json(data);
  },
  addProductToCart: async (req, res) => {
    try {
      const { product } = req.body;

      const box = await Cart.create({ product});

      await Cart.create({
        amount:1
      })
      const find = await Cart.findById(box.id).populate("product");
      res.json(find);
    }catch (e) {
      console.log(`ошибка при добавлении в корзину ${e}`)
    }
  },

  deleteProductFromCart: async (req, res) => {
    await Cart.findByIdAndRemove(req.params.id);

    res.json('ok');
  },
};
