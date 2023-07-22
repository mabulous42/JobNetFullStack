const userRoutes = require("express").Router()
const { registerAsEmployer, registerAsUser, userLogin, employerLogin } = require("../controllers/userControllers")
const { userValidationSchema, employerValidationSchema } = require("../middlewares/userValidationSchema")
const { validate } = require("../middlewares/validator")


userRoutes.post("/registerAsEmployer", validate(employerValidationSchema), registerAsEmployer)
userRoutes.post("/registerAsUser", validate(userValidationSchema), registerAsUser)
userRoutes.get("/userLogin", userLogin)
userRoutes.get("/employerLogin", employerLogin)

module.exports = userRoutes