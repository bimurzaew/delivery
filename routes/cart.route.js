const { Router } = require("express");
const { cartController } = require("../controllers/cart.controllers");

const router = Router();

router.get("/cart", cartController.getCart);
router.post("/cart/delete", cartController.deleteCart);
router.post("/cart/add", cartController.addProductToCart);
router.delete("/cart/delete/:id", cartController.deleteProductFromCart);
router.delete("/cart/delete/food/:id", cartController.deleteFoodFromCart);
router.patch("/cart/plusAmount/:id", cartController.plusAmountCart);
router.patch("/cart/minusAmount/:id", cartController.minusAmountCart);
router.post("/cart/add/food", cartController.addFoodToCart);

module.exports = router;
