const { employerModel, userModel } = require("../models/user.models")

const registerAsEmployer = async(req,res) => {
    let { employerName, email, password } = req.body
    try {
        const newUser = new employerModel({
            employerName,
            email,
            password
        })
        const result = await newUser.save()
        console.log(result)
        return res.status(201).send({ message: "Registration Successful", status: true })
    } catch (error) {
        console.log(error);
        // next(error)
    }
}

const registerAsUser = async(req,res) => {
    let { userName, email, password } = req.body
    try {
        const newUser = new userModel({
            userName,
            email,
            password
        })
        const result = await newUser.save()
        console.log(result)
        return res.status(201).send({ message: "Registration Successful", status: true })
    } catch (error) {
        console.log(error);
        // next(error)
    }
}

module.exports = {registerAsEmployer, registerAsUser}