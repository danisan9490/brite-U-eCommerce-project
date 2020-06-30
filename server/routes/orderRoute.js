const router = require('express').Router();
const controller = require('../controller/orderController');
const isAuth = require('../util');


router.get("/:id", isAuth, controller.getOrder);
router.post("/", isAuth, controller.postOrder);

module.exports = router;
