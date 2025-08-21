const mongoose=require("mongoose");
const schema=new mongoose.Schema({
  date:{type:Date,required:true},
  Text:{type:String,required:true}
});
module.exports=mongoose.model("list",schema);