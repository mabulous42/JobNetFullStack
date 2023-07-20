const { employerModel, userModel } = require("../models/user.models")
const { sendMessage } = require("../utilities/mailer")

const registerAsEmployer = async(req,res,next) => {
    let { employerName, email, password } = req.body
    try {
        const newUser = new employerModel({
            employerName,
            email,
            password
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
    try {
        const newUser = new userModel({
            userName,
            email,
            password
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

module.exports = {registerAsEmployer, registerAsUser}