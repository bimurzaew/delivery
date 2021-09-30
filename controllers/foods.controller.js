const Food = require("../models/Food.model");
const User = require("../models/User.model");

module.exports.foodController = {
  addFood: async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      const { name, price, desc } = req.body;
      const { image } = req.files;
      const newFileName = `${Math.floor(Math.random() * 10000)}${image.name}`;
      await image.mv(`./client/public/images/${newFileName}`, async (err) => {
        if (err) {
          res.json(err.toString());
        } else {
          const food = await Food.create({
            price,
            desc,
            image: newFileName,
            name,
            user,
          });
          res.json(food);
        }
      });
    } catch (e) {
      res.status(401).json(e.toString());
    }
  },
  getFood: async (req, res) => {
    try {
      const thing = await Food.find();
      res.json(thing);
    } catch (e) {
      res.json(e);
    }
  },
  getFoodForVendor: async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      const food = await Food.find({ user });
      res.json(food);
    } catch (e) {
      res.json(e.toString());
    }
  },
  deleteProduct: async (req, res) => {
    try {
      await Food.findByIdAndDelete(req.params.id);
      res.status(400);
    } catch (e) {
      res.json(e.toString());
    }
  },
};
