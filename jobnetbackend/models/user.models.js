const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs")

// Employer Schema
const employerSchema = new mongoose.Schema({
    employerName: {type: String, required: true, trim:true, unique:true},
    email: {type: String, unique:true, required: true, trim:true},
    password: {type: String, required: true, trim: true},
    date: {type: String, required: true}
})

// User schema
const userSchema = new mongoose.Schema({
    userName: {type: String, required: true, trim:true, unique:true},
    email: {type: String, unique:true, required: true, trim:true},
    password: {type: String, required: true, trim: true},
    date: {type: String, required: true}
})

let saltRound = 10
employerSchema.pre("save", function (next) {
    if (this.password != undefined) {
        bcryptjs.hash(this.password, saltRound).then((hashed)=>{
            this.password = hashed
            next()
        }).catch((error)=>{
            console.log(error, 33);
        })
    }
})

userSchema.pre("save", function (next) {
    if (this.password != undefined) {
        bcryptjs.hash(this.password, saltRound).then((hashed)=>{
            this.password = hashed
            next()
        }).catch((error)=>{
            console.log(error, 33);
        })
    }
})

const employerModel = mongoose.models.user_tbs || mongoose.model("employer_tbs", employerSchema)//creating a user table with an instance of the schema

const userModel = mongoose.models.user_tbs || mongoose.model("user_tbs", userSchema)//creating a user table with an instance of the schema


module.exports = {userModel, employerModel}