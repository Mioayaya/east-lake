const Sequelize = require("sequelize");
const db = require("../database/db");

module.exports = db.sequelize.define('users',{
        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        avatar:{
            type: String
        },
        date:{
            type: Date,
            default: Date.now
        },
})

// module.exports = User = mysql.model("users",UserSchema);