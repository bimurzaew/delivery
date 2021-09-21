const { Router } = require("express");
const { vendorsController } = require("../controllers/vendors.controller");

const router = Router();

router.post("/vendor", vendorsController.registerVendor);
router.post("/vendor/auth", vendorsController.vendorAuth);

module.exports = router;
