const express = require("express");
const router = express.Router();
const User = require("../../modles/Users");
const bcrypt = require("bcryptjs");
const chinaTime = require("china-time");
const jwt = require("jsonwebtoken");

// process.env.SECRET_KEY = "secret";

// 测试
router.get("/test",(req,res) => {
    res.json({code:1})
})

// 注册
router.post("/register",(req,res) => {
    const now = chinaTime("YYYY-MM-DD HH:mm:ss");
    const userData = {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        date:now,
    }
    // 存之前先检查是否存在
    User.findOne({where:{email:userData.email}}).then( (user) => {
        if(!user) {
            // 加密
            bcrypt.hash(req.body.password,10,(err,hash) => {
                // hash 加密后的内容
                userData.password = hash;
                User.create(userData).then( user => {
                    res.json({status:user.email + "registered"})
                }).catch( err => res.send("error: "+ err))
            })
        }else {
            // 数据库存在
            res.json({status:"user already exists"});
        }
    }).catch( err => res.send("erros: "+ err))
})

// 登录
router.post("/login",(req,res) => {
    // 拿到数据去表里检查
    User.findOne({where:{email:req.body.email}}).then( user => {
        // 用户存在
        if(user) {
            // 匹配密码
            if(bcrypt.compareSync(req.body.password,user.password)) {
                delete user.dataValues.password;  // 删除密码字段
                /*  
                // 生成token
                let token = jwt.sign(user.dataValues,process.env.SECRET_KEY,{
                    expiresIn:1440
                    // 过期时间
                })
                */
                res.json({msg:"login success",user});
            }else {
                res.send("password is error");
            }
        }else {
            res.status(400).json("error: "+ err)
        }
    })
})

module.exports = router;