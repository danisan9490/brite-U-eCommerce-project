const router = require('express').Router();
const controller = require('../controller/userControllers')

router.get("/createadmin", controller.createAdmin);
router.post("/signin", controller.postSignIn);
router.post("/register", controller.postRegister);

module.exports = router;
