const Product = require("../models/Product.model");

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
};
