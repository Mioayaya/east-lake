const express = require("express");
const mysql = require("mysql");
const app = express();

// 引入user.js
const users = require("./routers/api/users");

// 登录mysql
const connection = mysql.createConnection({
    host: "localhost" ,
    user: "root",
    password:"root" ,
    database: "a-create",
})

// 连接数据库
connection.connect();

// 测试数据库
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

// 关闭数据库
connection.end();

app.get("/",(req,res) => {
    res.send('hello node.js');
}) 

// 使用router
app.use("/api/users",users);

const port = process.env.port || 5000;

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})


