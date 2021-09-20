const bcrypt = require('bcrypt')
const Vendor = require('../models/Vendor.model')

module.exports.vendorsController = {
  registerVendor: async (req,res) => {
   try {
     const {login, password, storeName, email} = req.body
     if (!login) {
       res.json({error: 'необходимо ввести логин'})
     }
     if (!password) {
       res.json({error:'необходимо ввести пароль'})
     }
     if (!email) {
       res.json({error:'необходимо ввести пароль'})
     }
     if (!storeName) {
       res.json({error:'необходимо ввести пароль'})
     }
     const hash = bcrypt.hash(password, process.env.SALT)

     await Vendor.create({
       login,
       password:hash,
       email,
       storeName
     })
   }catch (e) {
     res.json(e.toString())
   }
  }
}