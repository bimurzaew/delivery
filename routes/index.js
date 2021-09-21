const { Router } = require("express");

const router = Router();

router.use(require("../routes/category.route"))

module.exports = router;
