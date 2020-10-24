const express = require("express");
const Project = require("../models/project")

const router = express.Router();


router.get("/projects", async (req,res,next) => {
    try{
        const projects = await Project.getProjects()
        res.json(projects)
    }
    //How does this interact with error messages and specific codes
    catch(err) {
        next(err);
    }
})

router.post("/projects", async(req, res, next) => {
    try{
        const answer = await Project.addProject(req.body)
        res.json("success")
    }
    catch(err) {
        next(err);
    }
})

module.exports = router;