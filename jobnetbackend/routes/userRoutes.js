const userRoutes = require("express").Router()
const { registerAsEmployer, registerAsUser } = require("../controllers/userControllers")

userRoutes.post("/registerAsEmployer", registerAsEmployer)
userRoutes.post("/registerAsUser", registerAsUser)

module.exports = userRoutes