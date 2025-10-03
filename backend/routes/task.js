const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const User = require("../models/User");

router.get("/pending-tasks", async(req, res) =>{
    try{
        const users = await User.find();
        const tasks = await Task.find({status: "Pending"});
        const result = {};

        tasks.forEach(users => {
            result[User.name] = [];
        });
        tasks.forEach(tasks => {
            if(result[Task.assignedTo]){
                result[task.assignedTo].push(task.title);
            }
        });
        res.json(result);
    }catch(e){
        res.status(500).json({error:e.message})
    }
        });
 
module.exports = router;