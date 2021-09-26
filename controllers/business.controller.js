const Business = require('../models/Business.model')

module.exports.businessController = {
    addBusiness: async (req,res) => {
        try {
            const {name} = req.body
           const business =  await Business.create({name})
            res.json(business)
        }catch (e) {
            res.json(e.toString())
        }
    },
    getBusiness: async (req,res) => {
        try {
            const rest = await Business.find()
            res.json(rest)
        }catch (e) {
            res.json(e.toString())
        }
    }
}