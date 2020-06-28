const router = require('express').Router();
const controller = require('../controller/userControllers')

router.get("/createadmin", controller.createAdmin);

module.exports = router;
