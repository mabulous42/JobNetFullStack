const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs")

// Employer Schema
const employerSchema = new mongoose.Schema({
    employerName: {type: String, required: true, trim:true, unique:true},
    email: {type: String, unique:true, required: true, trim:true},
    password: {type: String, required: true, trim: true},
    date: {type: String, required: true},
    inbox: {type: []}
})

// User schema
const userSchema = new mongoose.Schema({
    userName: {type: String, required: true, trim:true, unique:true},
    email: {type: String, unique:true, required: true, trim:true},
    password: {type: String, required: true, trim: true},
    date: {type: String, required: true},
    skills: {type: []}
})

// Employer password encrypt
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

// User password encrypt
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

// Employer Posted Jobs Schema
const postedJobsSchema = new mongoose.Schema({
    jobTitle: {type: String},
    email: {type: String},
    jobDescription: {type: String},
    date: {type: String},
    salaryType:{type: String},
    min_salary: {type: Number, trim:true},
    max_salary:{type: Number, trim:true},
    jobType:{type: String},
    requiredSkills:{type: []},
    author: {type: String}
})

const employerModel = mongoose.models.employer_tbs || mongoose.model("employer_tbs", employerSchema)//creating an employer table with an instance of the schema

const userModel = mongoose.models.user_tbs || mongoose.model("user_tbs", userSchema)//creating a user table with an instance of the schema

const postedJobsModel = mongoose.models.jobs_tbs || mongoose.model("postedjobs_tbs", postedJobsSchema)//creating a Posted Jobs table with an instance of the schema


module.exports = {userModel, employerModel, postedJobsModel}