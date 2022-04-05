"use strict";
const express = require('express');
const path = require('path');
const app = express();
const request = require('request');
const bodyParser = require("body-parser");
const Users = require("./routers/api/users");
 
// 配置静态文件服务中间件
let serverUrl='http://220.231.2.29:7668';//server地址
app.use(express.static(path.join(__dirname, './')));//静态资源index.html和node代码在一个目录下
app.use('/', function(req, res) {
  let url = serverUrl + req.url;
  req.pipe(request(url)).pipe(res);
});
// 配置post解析
// app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/api/v1",Users);
 
app.listen(3000,'127.0.0.1', function () {//前端ajax地址写 http://127.0.0.1:3000/
  console.log('server is running at port 3000');
});