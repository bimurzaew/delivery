const mongoose = require("mongoose");

const businessSchema = mongoose.Schema({
  name: String,
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;
