const model=require("../model/Task/task")
exports.addTask=async (req,res)=>{
 const {date,Text}=req.body;
 try{
  const task=await model.findOne({date});
  if(task)
  {
    res.status(400).json({msg:"task already exist"});

  }
  const createdtask=new model({date:date,Text:Text});
  await createdtask.save();
  res.status(202).json({msg:"task is created successfully"});
 }
 catch(err)
 {
  res.status(500).json({msg:err});
 }
}
exports.fetchTask=async(req,res)=>{
  const {date}=req.body;
  try{
    const task=await model.findOne({date});
    if(!task)
    {
      res.status(404).json({msg:"No tak is found with this date"});
    }
    res.status(200).json({msg:task});
  }
  catch(err)
  {
    res.status(500).json({msg:err});
  }
}
exports.updateTask=async (req,res)=>{
  const {date,updatedtask}=req.body;
  try{
   await model.findOneAndDelete({date})

   const task=await new model({date:date,Text:updatedtask});
   await task.save();
   res.status(200).json({msg:"task is updated successfully"});

  }
  catch(err)
  {
    res.status(404).json({msg:err})
  }
}