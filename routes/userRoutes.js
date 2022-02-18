const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/userControllers");

const auth = require("../auth");

const {verify,verifyAdmin} = auth; 


router.post("/",userControllers.registerUser);

router.post("/login",userControllers.loginUser);

router.put("/updateAdmin/:id",verify,verifyAdmin,userControllers.updateAdmin)

router.get("/getUserDetails",verify,userControllers.getUserDetails)


module.exports = router;