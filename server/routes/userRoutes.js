const router = require('express').Router();
const controller = require('../controller/userControllers')
const isAuth = require('../util');

router.get("/createadmin", controller.createAdmin);
router.post("/signin", controller.postSignIn);
router.post("/register", controller.postRegister);
router.put("/:id", isAuth, controller.editUser);

module.exports = router;
