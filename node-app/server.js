const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Users = require("./routers/api/users");

app.get("/",(req,res) => {
    res.send("hello express");
})

// 配置post解析
// app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/api/v1",Users);

app.listen(5000,() => {
    console.log("Server is running on port 5000...");
})