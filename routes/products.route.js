const { Router } = require("express");
const { productsController } = require("../controllers/products.controller");

const router = Router();

router.post("/product", productsController.addProduct);

module.exports = router;
