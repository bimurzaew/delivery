const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");

const router = Router();

router.post("/user", usersController.register);
router.post("/user/auth", usersController.login);

module.exports = router;
