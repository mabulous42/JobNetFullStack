const { employerModel, userModel, postedJobsModel } = require("../models/user.models")
const bcryptjs = require("bcryptjs")
const { generateToken, verifyToken } = require("../services/sessions")
const { sendMessage } = require("../utilities/mailer")
const { DateTimeDisplay } = require("../utilities/dateAndTime")


const registerAsEmployer = async (req, res, next) => {
    let { employerName, email, password } = req.body
    let date = DateTimeDisplay()
    try {
        const newUser = new employerModel({
            employerName,
            email,
            password,
            date
        })
        const result = await newUser.save()
        console.log(result)
        sendMessage(email)
        return res.status(201).send({ message: "Registration Successful", status: true })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

const registerAsUser = async (req, res, next) => {
    let {userName, email, password, skills } = req.body
    let date = DateTimeDisplay()
    try {
        const newUser = new userModel({
            userName,
            email,
            password,
            date,
            skills
        })
        const result = await newUser.save()
        console.log(result)
        sendMessage(email)
        return res.status(201).send({ message: "Registration Successful", status: true })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body
        console.log(email, password)
        const user = await userModel.findOne({ email })
        console.log(user)
        if (!user) {
            return res.status(404).send({ message: "User credentials is incorrect", status: false })
        }
        const isMatch = await bcryptjs.compare(password, user.password)
        console.log(isMatch);
        if (!isMatch) {
            return res.status(401).send({ message: "User credentials is incorrect", status: false })
        }
        const token = generateToken(email);
        return res.status(200).send({ message: `Welcome ${user.userName}`, status: true, token })
    } catch (error) {
        next(error)
    }
}

const employerLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body
        console.log(email, password)
        const user = await employerModel.findOne({ email })
        console.log(user)
        if (!user) {
            return res.status(404).send({ message: "You do not have an account with us", status: false })
        }
        const isMatch = await bcryptjs.compare(password, user.password)
        console.log(isMatch);
        if (!isMatch) {
            return res.status(401).send({ message: "Invalid password", status: false })
        }
        const token = generateToken(email);
        return res.status(200).send({ message: `Welcome ${user.userName}`, status: true, token })
    } catch (error) {
        next(error)
    }
}

const updateUserSkill = async (req, res, next) => {
    console.log(req.body);
    try {
        const {skills, email} = req.body;
        console.log(skills, email);
        const update = await userModel.findOneAndUpdate({email:email}, {$set:{skills: skills}});
        console.log("updated: " +update);
        return res.status(201).send({ message: "Items Updated Successful", status: true })
    } catch (error) {
        next(error)
    }
}


const userDashboard = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]        
        const email = verifyToken(token)
        console.log(email)
        const user = await userModel.findOne({ email: email })
        if (!user) return res.status(404).send({ message: "User not found", status: false })
        res.status(200).send(user)
    } catch (error) {
        next(error)
    }
}

const employerDashboard = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]        
        const email = verifyToken(token)
        console.log(email)
        const user = await employerModel.findOne({ email: email })
        if (!user) return res.status(404).send({ message: "User not found", status: false })
        res.status(200).send(user)
    } catch (error) {
        next(error)
    }
}

const allUsers = async (req, res, next) => {
    try {
        const users = await userModel.find({}, { email: 1, password: 1})
        console.log(users)
        res.status(200).send(users)
    } catch (error) {
        next(error)
    }
}

const allEmployer = async (req, res, next) => {
    try {
        const users = await employerModel.find({}, { email: 1, password: 1})
        console.log(users)
        res.status(200).send(users)
    } catch (error) {
        next(error)
    }
}

const jobs = async (req, res, next) => {
    const {jobTitle, jobDescription, salaryType, min_salary, max_salary, jobType, requiredSkills, author, email} = req.body;
    let date = DateTimeDisplay()
    console.log(jobTitle, jobDescription, salaryType, min_salary, max_salary, jobType, requiredSkills, email, author, date);
    try {
        const newPostedJobs = new postedJobsModel({
            jobTitle,
            email,
            jobDescription,
            date,
            salaryType,
            min_salary,
            max_salary,
            jobType,
            requiredSkills,
            author
        })
        const result = await newPostedJobs.save()
        console.log(result)
        return res.status(201).send({ message: "Your Job has been posted Successfully", status: true })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

const allJobs = async (req, res, next) => {
    try {
        const jobs = await postedJobsModel.find({})
        console.log(jobs)
        res.status(200).send(jobs)
    } catch (error) {
        next(error)
    }
}

const employerInbox = async (req, res, next) => {
    console.log(req.body);
    try {
        const {inbox, email} = req.body;
        console.log(inbox, email);
        const update = await employerModel.findOneAndUpdate({email:email}, {$set:{inbox: inbox}});
        console.log("updated: " +update);
        return res.status(201).send({ message: "Application Submitted Successfully", status: true })
    } catch (error) {
        next(error)
    }
}


module.exports = { 
    registerAsEmployer, registerAsUser, userLogin, 
    employerLogin, updateUserSkill, userDashboard, allUsers, allEmployer, 
    employerDashboard, jobs, allJobs, employerInbox 
}