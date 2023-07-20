const userRoutes = require("express").Router()
const { registerAsEmployer, registerAsUser } = require("../controllers/userControllers")
const { userValidationSchema, employerValidationSchema } = require("../middlewares/userValidationSchema")
const { validate } = require("../middlewares/validator")


userRoutes.post("/registerAsEmployer", validate(employerValidationSchema), registerAsEmployer)
userRoutes.post("/registerAsUser", validate(userValidationSchema), registerAsUser)

module.exports = userRoutes