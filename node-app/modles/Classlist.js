const Sequelize = require("sequelize");
const db = require("../database/db");

module.exports = db.sequelize.define('classlists',{
        id:{
            type: Sequelize.INTEGER, // int类型
            primaryKey:true,    // 主键
            autoIncrement:true,  // 自增
        },
        userid:{
            type: Sequelize.INTEGER,
        },
        classname:{
            type: Sequelize.STRING,
        },
        img:{
            type: Sequelize.STRING,
        },
    },{
        timestamps:false, // 不自动加上createdAt和updateAT
    },{
        define: { freezeTableName: true } 
    }
)