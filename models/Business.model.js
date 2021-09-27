const mongoose = require("mongoose");

const businessSchema = mongoose.Schema({
  name:String,
  essence: String,
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;
