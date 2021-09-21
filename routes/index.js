const { Router } = require("express");

const router = Router();

router.use(require("../routes/category.route"))
router.use(require("./couriers.route"))
router.use(require('./vendors.route'))
router.use(require('./products.route'))

module.exports = router;

