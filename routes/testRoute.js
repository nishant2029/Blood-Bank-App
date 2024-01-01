const express=require("express");
const { testConroller } = require("../controllers/testController");


//router object
const router=express.Router();

//routes
router.get("/",testConroller);

//export

module.exports = router;
