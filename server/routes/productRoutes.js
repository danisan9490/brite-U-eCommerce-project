const router = require('express').Router();
const controller = require('../controller/productControllers');
const isAdmin = require('../util');
const isAuth = require('../util');


router.get("/", controller.getProducts);
router.post("/", isAuth, isAdmin, controller.postProduct,);
router.delete("/:id", isAuth, isAdmin, controller.deleteProduct);
router.put("/:id", isAuth, isAdmin, controller.editProduct);

module.exports = router;
