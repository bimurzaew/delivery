const { Router } = require("express");

const router = Router();

router.use(require("./category.route"))
router.use(require('./users.route'))
router.use(require('./products.route'))
router.use(require('./cart.route'))
router.use(require('./order.route'))
router.use(require('./things.route'))

module.exports = router;

