const Product = require("../models/Product.model");
const Category = require("../models/Category.model");

module.exports.productsController = {
  addProduct: async (req, res) => {
    try {
      const { name, price, desc } = req.body;
      const { image } = req.files;
      const newFileName = `/images${Math.floor(Math.random() * 10000)}${
        image.name
      }`;
      await image.mv(`./client/public/images${newFileName}`, async (err) => {
        if (err) {
          res.json(err.toString());
        } else {
          await Product.create({
            name,
            price,
            desc,
            image: newFileName,
          });
          res.json("success");
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
      const newFileName = `/images${Math.floor(Math.random() * 10000)}${
        image.name
      }`;
      await image.mv(`./client/public/images${newFileName}`, async (err) => {
        if (err) {
          res.json(err.toString());
        } else {
          await Product.findByIdAndUpdate(req.params.id, {
            $set: { ...req.body },
          });
          res.json("success");
        }
      });
    } catch (e) {
      res.status(401).json(e.toString());
    }
  },
  deleteProduct: async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.json({ message: "товар удален" });
    } catch (e) {
      res.json(e.toString());
    }
  },
  getProducts: async (req, res) => {
    try {
      const products = await Product.find().populate();
      res.json(products);
    } catch (e) {
      res.json(e.toString());
    }
  },
  getProductById: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
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
};
