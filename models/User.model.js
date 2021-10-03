const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name:String,
  lastName:String,
  login:String,
  password:String,
  email:String,
  role:String,
  business:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Business"
  },
  order:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Order"
  }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
