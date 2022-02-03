const express = require("express");
const router = express.Router();

const productControllers = require("../controllers/productControllers");

const auth = require("../auth");
const {verify,verifyAdmin} = auth;

router.post("/",verify,verifyAdmin,productControllers.addProduct);

router.get('/getActiveProducts',productControllers.getActiveProducts);

router.get('/getSingleProduct/:id',productControllers.getSingleProduct);

router.put('/:id',verify,verifyAdmin,productControllers.updateProduct);

router.put('/archive/:id',verify,verifyAdmin,productControllers.archiveProduct);

router.put('/activate/:id',verify,verifyAdmin,productControllers.activateProduct);

router.get('/getOrderProducts',verify,productControllers.getOrderProducts);





module.exports = router;