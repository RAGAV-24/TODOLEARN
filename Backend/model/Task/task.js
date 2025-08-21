const mongoose=require("mongoose");
const schema=new mongoose.Schema({
  date:{type:String,required:true},
  Text:{type:String,required:true}
});
module.exports=mongoose.model("task",schema);