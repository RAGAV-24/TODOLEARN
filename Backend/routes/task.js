const express=require('express')
const router=express.Router();
const {addTask,fetchTask,updateTask,fetchAllTask,deletetask}=require("../controller/task");
router.post("/add",addTask);
router.get("/fetch",fetchTask);
router.get("/fetchall",fetchAllTask);
router.put("/update",updateTask);
router.delete("/delete",deletetask);
module.exports=router;