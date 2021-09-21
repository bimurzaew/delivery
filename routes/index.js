const { Router } = require("express");

const router = Router();

router.use(require("./couriers.route"))

module.exports = router;