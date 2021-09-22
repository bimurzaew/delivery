const { Router } = require("express");
const { productsController } = require("../controllers/products.controller");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = Router();

router.post("/product", productsController.addProduct);
router.patch("/product/:id",authMiddleware, productsController.editProduct);
router.delete("/product/:id/delete",authMiddleware, productsController.deleteProduct);
router.get("/products", productsController.getProducts);
router.get("/product/:id", productsController.getProductById);
router.get("/product/category/:id", productsController.getProductByCategory);

module.exports = router;
