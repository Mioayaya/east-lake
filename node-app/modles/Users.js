const Sequelize = require("sequelize");
const db = require("../database/db");

module.exports = db.sequelize.define('users',{
        id:{
            type: Sequelize.INTEGER, // int类型
            primaryKey:true,    // 主键
            autoIncrement:true,  // 自增
        },
        name:{
            type: Sequelize.STRING,  // 字符串类型
            // required: true
        },
        email:{
            type: Sequelize.STRING,
            // required: true
        },
        password:{
            type: Sequelize.STRING,
            // required: true
        },
        avatar:{
            type: Sequelize.STRING,
        },
        date:{
            type: Sequelize.STRING,
            // default: Sequelize.NOW  // 当前时间
            // 采用js里获取cn time
        },
        sign:{
            type: Sequelize.STRING,
        }
    },{
        timestamps:false, // 不自动加上createdAt和updateAT
    },{
        define: { freezeTableName: true } 
    }
)

// module.exports = User = mysql.model("users",UserSchema);