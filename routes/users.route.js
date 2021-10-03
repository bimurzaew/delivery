const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = Router();

router.post("/user", usersController.register);
router.post("/user/auth", usersController.login);
router.patch("/user/order/:id", authMiddleware, usersController.addOrderToUser);
router.get("/user", authMiddleware, usersController.getUser);

module.exports = router;
