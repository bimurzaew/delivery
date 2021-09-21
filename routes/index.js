const { Router } = require("express");

const router = Router();

router.use(require("./category.route"))
router.use(require('./users.route'))
router.use(require('./products.route'))

module.exports = router;

