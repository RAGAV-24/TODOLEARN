const express=require('express')
const router=express.Router();
const {LoginUser}=require("../controller/login");
const {useRegister}=require("../controller/register");

router.post("/register",useRegister);
router.post("/login",LoginUser);

module.exports=router;