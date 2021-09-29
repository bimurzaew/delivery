const { Router } = require("express");
const { foodController } = require("../controllers/foods.controller");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = Router();

router.get("/food", foodController.getFood);
router.post("/food", authMiddleware, foodController.addFood);
router.get("/food/vendor", authMiddleware, foodController.getFoodForVendor);
router.delete("/food/:id", authMiddleware, foodController.deleteProduct);

module.exports = router;
