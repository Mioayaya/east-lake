const Sequelize = require("sequelize");
const db = {};
const sequelize = new Sequelize("a-create","root","root",{
    host:"localhost",
    dialect:"mysql",
    pool:{
        max:5,
        min:0,
        acquire:3000,
        idle:10000
    }
})
// 按照文档里的配置  实例化里传数据库名称 a-create 数据库的用户名root 密码root  
// 主机是localhost 数据库类型是mysql pool是连接池信息 设置最大连接5个，连接了5个以上就需要等待，最小是0，
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;