const express = require("express");
const router = express.Router();
const User = require("../../modles/Forum");
const bcrypt = require("bcryptjs");
const chinaTime = require("china-time");
const jwt = require("jsonwebtoken");

// 测试
router.get("/test",(req,res) => {
    res.json({code:1})
})