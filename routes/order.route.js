const {Router} = require("express");
const { authMiddleware } = require('../middlewares/authMiddleware')
const {orderControllers} = require("../controllers/order.controllers");

const router = Router();

router.get("/order",authMiddleware, orderControllers.getOrder);
// router.get("/order/:id",authMiddleware, orderControllers.getOrderOne);
router.post("/order", orderControllers.addOrder);
router.get("/order/courier",authMiddleware, orderControllers.getOrderByCourier);
router.delete("/order/:id",authMiddleware, orderControllers.completeOrder);

module.exports = router;