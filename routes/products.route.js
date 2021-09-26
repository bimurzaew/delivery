const { Router } = require("express");
const { productsController } = require("../controllers/products.controller");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = Router();

router.post("/vendor", authMiddleware, productsController.addProduct);
router.patch("/vendor/:id",authMiddleware, productsController.editProduct);
router.delete("/vendor/:id/delete",authMiddleware, productsController.deleteProduct);
router.get("/products", productsController.getProducts);
router.get("/vendor/:id", productsController.getProductById);
router.get("/vendor/category/:id", productsController.getProductByCategory);
router.get("/products/user", authMiddleware, productsController.getProductsForUser)

module.exports = router;
