const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
  name: String,
  price:Number,
  image:String,
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  desc:String
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
