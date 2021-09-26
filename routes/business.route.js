const { Router } = require("express");
const { businessController } = require("../controllers/business.controller");

const router = Router();

router.post("/business", businessController.addBusiness);
router.get("/business", businessController.getBusiness);

module.exports = router;
