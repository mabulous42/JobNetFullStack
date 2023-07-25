const userRoutes = require("express").Router()
const { registerAsEmployer, registerAsUser, userLogin, employerLogin, getNewUser, updateUserSkill } = require("../controllers/userControllers")
const { userValidationSchema, employerValidationSchema } = require("../middlewares/userValidationSchema")
const { validate } = require("../middlewares/validator")


userRoutes.post("/registerAsEmployer", validate(employerValidationSchema), registerAsEmployer)
userRoutes.post("/registerAsUser", validate(userValidationSchema), registerAsUser)
userRoutes.get("/userLogin", userLogin)
userRoutes.get("/employerLogin", employerLogin)
userRoutes.get("/getNewUser/:email", getNewUser)
userRoutes.post("/updateUserSkill", updateUserSkill)

module.exports = userRoutes