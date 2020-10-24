const express = require("express");
const Task = require("../models/task")

const router = express.Router();


router.get("/tasks", async (req,res,next) => {
    try{
        const tasks = await Task.getTasks()
        res.json(tasks)
    }
    //How does this interact with error messages and specific codes
    catch(err) {
        next(err);
    }
})

router.post("/tasks", async(req, res, next) => {
    try{
         await Task.addTask(req.body)
        res.json("success")
    }
    catch(err) {
        next(err);
    }
})

module.exports = router;