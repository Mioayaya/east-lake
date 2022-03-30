const mysql = require("mysql");
const Schema = mysql.Schema;

// create Schema
const UserSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        
    }
})