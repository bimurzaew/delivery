const Thing = require('../models/Thing.model')

module.exports.thingsController = {
    addThing: async (req, res) => {
        try {
            const {name} = req.body
            await Thing.create({
                name
            })
            res.json('success')
        }catch (e) {
            res.json(e)
        }
    },
    getThings: async (req,res) => {
        try {
           const thing =  await Thing.find()
            res.json(thing)
        }catch (e) {
            res.json(e)
        }
    }
}