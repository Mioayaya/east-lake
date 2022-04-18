const express = require("express");
const router = express.Router();
const Classlist = require("../../modles/Classlist");

// 测试
router.get("/test",(req,res) => {
    res.json({code:1})
})

router.post("/pay",(req,res) => {
    const userData = {
        userid: req.body.id,
        classname: req.body.list,
    }
    Classlist.create(userData).then(() => {
    }).catch(err => res.send("error: "+err))
})

router.get("/getPay/:id",(req,res) => {
    const userid = req.params.id;
    Classlist.findOne({where:{userid:userid}}).then( list => {
        if(list) {
            res.send({msg:'yes',list});
        }else {
            res.send("该用户没有买过课程");
        }
    })
})
module.exports = router;