const express=require('express')
const router=express.Router();
const {addTask,fetchTask,updateTask}=require("../controller/task");
router.post("/add",addTask);
router.get("/fetch",fetchTask);
router.put("/update",updateTask);
module.exports=router;