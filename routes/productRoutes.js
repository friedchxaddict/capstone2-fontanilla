const express = require("express");
const router = express.Router();

const productControllers = require("../controllers/productControllers");

const auth = require("../auth");
const {verify,verifyAdmin} = auth;

router.post("/",verify,verifyAdmin,productControllers.addProduct);

router.get('/getActiveProducts',productControllers.getActiveProducts);

router.get('/getSingleProduct/:id',productControllers.getSingleProduct);







module.exports = router;