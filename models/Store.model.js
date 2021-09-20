const mongoose = require('mongoose')

const storeSchema = mongoose.Schema({
  name:String,
  description:String
})

const Store = mongoose.model('Store', storeSchema)

module.exports = Store;