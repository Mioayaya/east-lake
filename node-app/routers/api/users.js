const express = require("express");
const router = express.Router();
const User = require("../../modles/Users");

router.get("/test",(req,res) => {
    res.json({code:1})
})

router.post("/register",(req,res) => {
    console.log(req.body)
})

module.exports = router;