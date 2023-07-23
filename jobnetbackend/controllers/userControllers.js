const { employerModel, userModel } = require("../models/user.models")
const bcryptjs = require("bcryptjs")
const { generateToken, verifyToken } = require("../services/sessions")
const { sendMessage } = require("../utilities/mailer")
const { DateTimeDisplay } = require("../utilities/dateAndTime")


const registerAsEmployer = async(req,res,next) => {
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

const registerAsUser = async(req,res,next) => {
    let { userName, email, password } = req.body
    let date = DateTimeDisplay()
    try {
        const newUser = new userModel({
            userName,
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

const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body
        console.log(email, password)
        const user = await userModel.findOne({ email })
        console.log(user)
        if (!user) {
            return res.status(404).send({ message: "You do not have an account with us", status:false })
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

const employerLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body
        console.log(email, password)
        const user = await employerModel.findOne({ email })
        console.log(user)
        if (!user) {
            return res.status(404).send({ message: "You do not have an account with us", status:false })
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

module.exports = {registerAsEmployer, registerAsUser, userLogin, employerLogin}