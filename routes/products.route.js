const { Router } = require("express");
const { productsController } = require("../controllers/products.controller");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = Router();

router.post("/product", authMiddleware, productsController.addProduct);
router.patch("/product/:id",authMiddleware, productsController.editProduct);
router.delete("/product/:id/delete",authMiddleware, productsController.deleteProduct);
router.get("/products", productsController.getProducts);
router.get("/products/pro", productsController.getProductsFor);
router.get("/product/category/:id", productsController.getProductByCategory);
router.get("/products/user", authMiddleware, productsController.getProductsForUser)

module.exports = router;
