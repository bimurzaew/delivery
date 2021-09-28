const { Router } = require("express");
const { thingsController } = require("../controllers/thing.controller");

const router = Router();

router.get("/things", thingsController.getThings);
router.post("/thing", thingsController.addThing);

module.exports = router;
