const {Router} = require("express");
const { authMiddleware } = require('../middlewares/authMiddleware')
const {orderControllers} = require("../controllers/order.controllers");

const router = Router();

router.get("/order", orderControllers.getOrder);
router.post("/order", orderControllers.addOrder);

module.exports = router;