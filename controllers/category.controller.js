const category = require("../models/Category.model");

module.exports.categoryController = {
  createCategory: async (req, res) => {
    try {
      await category.create({
        name: req.body.name,
      });
      res.json("Категория успешно добавлена")
    }catch (err){
      console.log(err)
    }
  },
  changeCategory: async (req,res) => {
    try {
      await category.findByIdAndUpdate(req.params.id,{
        name: req.body.name,
      })
      res.json("Категория успешно изменена")
    }catch (err){
      console.log(err)
    }
  },
  getCategory: async (req,res) => {
    try {
      const getCategory = await category.find()
      res.json(getCategory)
    }catch (err){
      console.log(err)
    }
  }
};
