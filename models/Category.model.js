const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: String,
  img: String,
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
