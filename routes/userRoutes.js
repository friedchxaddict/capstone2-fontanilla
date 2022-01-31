const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/userControllers");

const auth = require("../auth");

const {verify} = auth; 


router.post("/",userControllers.registerUser);



module.exports = router;