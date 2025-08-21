const Login=require("../model/Login/login")
const register=require("../model/Login/register")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.LoginUser=async(req,res)=>{
  const {email,password}=req.body;
  console.log(email+" "+password);
  try{
    const user = await register.findOne({email});
    if(!user)
    {
      return res.status(400).json({message:"there is no user with this login credential"});
    }
    const compare=bcrypt.compare(password,user.password);
    if(!compare)
    {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
    const token= jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({token});

  }
  catch(err)
  {
    console.log("Error in register api in backend",err);
    return res.status(500).json({err:err});
  }
}