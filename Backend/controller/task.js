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
exports.fetchAllTask= async(req,res)=>{
  try{
   const task=await model.find();
   if(!task)
   {
    res.status(201).json({msg:"there is no task to fetch"});
   }
   res.status(200).json(task);
  }
  catch(err)
  {
    console.log(err);
    res.status(500).json({msg:err});
  }
}
exports.deletetask=async (req,res)=>{
  try {
    console.log(req);
    const {date}=req.body;
    await model.findOneAndDelete({date})
    res.status(200).json({msg:"Task Successfully removed"});

  } catch (error) {
    console.log("Error at the delete api");
    console.log(error);
   res.status(500).json({msg:error})
  }
}