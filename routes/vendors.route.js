const {Router} = require('express')
const {vendorsController} = require('../controllers/vendors.controller')

const router = Router()

router.post('/vendor', vendorsController.registerVendor)