const { Router } = require("express");
const { productsController } = require("../controllers/products.controller");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = Router();

router.post("/product", productsController.addProduct);
router.patch("/product/:id", productsController.editProduct);
router.delete("/product/:id/delete", productsController.deleteProduct);
router.get("/products", productsController.getProducts);
router.get("/product/:id", productsController.getProductById);

module.exports = router;
