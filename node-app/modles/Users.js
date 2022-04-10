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
        },
        age:{
            // 年龄
            type: Sequelize.INTEGER,
        },
        birth:{
            // 生日
            type: Sequelize.STRING,
        },
        sex:{
            // 性别
            type: Sequelize.STRING,
        },
        character:{
            // 性格
            type: Sequelize.STRING,
        },
        hobby:{
            // 爱好
            type: Sequelize.STRING,
        },
        specialty:{
            // 特长
            type: Sequelize.STRING,
        },
        punch:{
            // 打卡时间
            type: Sequelize.INTEGER
        }
    },{
        timestamps:false, // 不自动加上createdAt和updateAT
    },{
        define: { freezeTableName: true } 
    }
)

// module.exports = User = mysql.model("users",UserSchema);