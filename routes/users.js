const express = require("express");
const router = express.Router();

router.get("/users",(req,res,next)=>{
    res.send("respond with a resource")
})

router.get("/users/:id",(req,res,next)=>{
    const msg = req.params
    console.log(msg)
    res.send(`you are ${msg.id}`)
})

module.exports = router;