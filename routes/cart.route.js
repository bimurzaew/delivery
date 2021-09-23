const { Router } = require("express");
const { cartController } = require("../controllers/cart.controllers");

const router = Router();

router.get("/cart", cartController.getCart);
router.post("/cart/add", cartController.addProductToCart);
router.delete("/cart/delete/:id", cartController.deleteProductFromCart)

module.exports = router;
