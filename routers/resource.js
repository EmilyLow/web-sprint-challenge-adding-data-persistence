const express = require("express");
const Resource = require("../models/resource")

const router = express.Router();


router.get("/resources", async (req,res,next) => {
    try{
        const resources = await Resource.getResources()
        res.json(resources)
    }
    //How does this interact with error messages and specific codes
    catch(err) {
        next(err);
    }
})

module.exports = router;