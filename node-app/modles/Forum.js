const Sequelize = require("sequelize");
const db = require("../database/db");

module.exports = db.sequelize.define('forum',{
        id:{
            type: Sequelize.INTEGER, // int类型
            primaryKey:true,    // 主键
            autoIncrement:true,  // 自增
        },
        userid:{
            type: Sequelize.INTEGER,
        },
        comment:{
            type: Sequelize.STRING,
        },
        date:{
            type: Sequelize.STRING,
        }
    },{
        timestamps:false, // 不自动加上createdAt和updateAT
    },{
        define: { freezeTableName: true } 
    }
)