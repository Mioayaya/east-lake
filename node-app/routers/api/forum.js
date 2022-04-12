const express = require("express");
const router = express.Router();
const Forum = require("../../modles/Forum");

// 测试
router.get("/test",(req,res) => {
    res.json({code:1})
})

// 发表评论
router.post("/comment",(req,res) => {
    const userData = {
        userid: req.body.id,
        username: req.body.name,
        comment: req.body.comment,
        date: req.body.date,
        desc: '',
        avatar: req.body.avatar,
    }
    // console.log(userData);
    Forum.create(userData).then( () => {
        // res.json({ msg:"评论成功",forum})
    }).catch( err => res.send("error: "+err))
    
})

// 获取所有的评论信息
router.get("/getcomments",(req,res) => {
    Forum.findAll().then( comments => {
        res.json(comments);
    })
})
module.exports = router;