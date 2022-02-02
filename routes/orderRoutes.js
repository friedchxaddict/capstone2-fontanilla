const express = require("express");
const router = express.Router();

const orderControllers = require("../controllers/orderControllers");

const auth = require("../auth");
const {verify,verifyAdmin} = auth;

router.post("/",verify,orderControllers.addOrder);






module.exports = router;


