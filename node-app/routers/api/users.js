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
        avatar:'https://cdn.luogu.com.cn/upload/usericon/1.png',
        sign:'这家伙很懒,什么也没写! ',
        punch: 0,
        sex: '保密',
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

// 查询
router.get("/getId/:id",(req,res) => {
    // 测试
    console.log(req.params);
    const id = req.params.id;
    User.findOne({ where:{id:id}}).then( user => {
        // 用户存在
        if(user) {
            res.json({msg:"查询成功",user});
        }else {
            res.send("用户不存在");
        }
    })
    // res.json({msg:id});
})

// 修改用户签名
router.post("/editsign",(req,res) => {
    const userData = {
        id: req.body.id,
        sign: req.body.sign,
    }
    User.update({sign: userData.sign}, {
        where: {
            id: userData.id
        }
    }).then( () => {
        res.json({msg:"修改成功! "})
    })
})

// 修改打卡天数
router.post("/editpunch",(req,res) => {
    const userData = {
        id: req.body.id,
        punch: req.body.punch,
    }
    User.update({punch: userData.punch}, {
        where: {
            id: userData.id
        }
    }).then(() => {
        res.json({msg:"签到成功! "})
    })
})

// 修改用户信息
router.post("/edit",(req,res) => {
    const userData = {
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        birth: req.body.birth,
        avatar: req.body.avatar,
        sex: req.body.sex,
        character: req.body.character,
        hobby: req.body.hobby,
        specialty: req.body.specialty,
    }
    User.update({
        name:userData.name,
        age:userData.age,
        birth:userData.birth,
        avatar:userData.avatar,
        sex:userData.sex,
        character:userData.character,
        hobby:userData.hobby,
        specialty:userData.specialty,
    },{
        where: {
            id: userData.id
        }
    }).then(() => {
        res.json({msg:"更新成功! "})
    })
})
module.exports = router;