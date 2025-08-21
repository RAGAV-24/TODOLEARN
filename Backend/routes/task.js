const express=require('express')
const router=express.Router();
const {addTask}=require("./controller/task");
router.get("/task",addTask);
module.exports=router;