const { Router } = require("express");
const { categoryController } = require("../controllers/category.controller");

const router = Router();

router.post("/category", categoryController.createCategory);
router.patch("/category/:id", categoryController.changeCategory);
router.get("/category", categoryController.getCategory);
router.delete("/category/:id", categoryController.deleteCategory)

module.exports = router;
