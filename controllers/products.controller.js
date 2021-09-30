const Product = require("../models/Product.model");
const Category = require("../models/Category.model");
const User = require("../models/User.model");

module.exports.productsController = {
  addProduct: async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      const { name, price, desc, category, amount, thing } = req.body;

      const { image } = req.files;

      const newFileName = `${Math.floor(Math.random() * 10000)}${image.name}`;
      await image.mv(`./client/public/images/${newFileName}`, async (err) => {
        if (err) {
          res.json(err.toString());
        } else {
          const product = await Product.create({
            name,
            price,
            desc,
            amount,
            image: newFileName,
            category,
            user,
            thing,
          });
          res.json(product);
        }
      });
    } catch (e) {
      res.status(401).json(e.toString());
    }
  },
  editProduct: async (req, res) => {
    try {
      const { name, price, desc } = req.body;
      const { image } = req.files;
      if (!image) {
        const newFileName = `${Math.floor(Math.random() * 10000)}${image.name}`;
        const product = await Product.findByIdAndUpdate(req.params.id, {
          $set: { ...req.body, image: newFileName },
        });
        res.json(product);
      } else {
        const newFileName = `${Math.floor(Math.random() * 10000)}${image.name}`;
        await image.mv(`./client/public/images/${newFileName}`, async (err) => {
          if (err) {
            res.json(err.toString());
          } else {
            const product = await Product.findByIdAndUpdate(req.params.id, {
              $set: { ...req.body, image: newFileName },
            });
            res.json(product);
          }
        });
      }
    } catch (e) {
      res.status(401).json(e.toString());
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      await Product.findByIdAndDelete(req.params.id);
      const products = await Product.find({ user });
      res.json(products);
    } catch (e) {
      res.json(e.toString());
    }
  },
  getProducts: async (req, res) => {
    try {
      const products = await Product.find().sort({ amount: -1 });
      res.json(products);
    } catch (e) {
      res.json(e.toString());
    }
  },
  getProductsFor: async (req, res) => {
    try {
      const product = await Product.find({ thing: "Еда" });
      res.json(product);
    } catch (e) {
      res.json(e.toString());
    }
  },
  getProductByCategory: async (req, res) => {
    try {
      const product = await Product.find({ category: req.params.id });
      res.json(product);
    } catch (e) {
      res.json(e.toString());
    }
  },
  getProductsForUser: async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      const product = await Product.find({ user }).populate("category");
      res.json(product);
    } catch (e) {
      res.json(e.toString());
    }
  },
};
