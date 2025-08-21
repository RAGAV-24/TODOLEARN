const register=require("../model/Login/register")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.useRegister=async(req,res)=>{
  const {name,email,password}=req.body;
  try {


  if(!name||!email||!password)
  {
    return res.status(401).json({msg:"the redential are missing"});
  }
  const user=await register.findOne({email})
  if(user)
  {
    return res.status(401).json({msg:"user aldrey exist"});

  }
   const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
  const profile=new  register({name:name,email:email,password:hashedPassword});
  await profile.save();
  res.json({ msg: "User registered successfully" });
 } catch ({error}) {
    console.log(error+"at the register.js controller");
  }
}