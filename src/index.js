const express = require("express")

const app = express()

const todoController = require("./controller/todo.controller")
const { register,login } = require("./controller/auth.controller")
const { body , validationResult } = require("express-validator")

app.use(express.json())

app.use("/todos",todoController)

app.use("/register",register)
app.use("/login",login)

module.exports =app