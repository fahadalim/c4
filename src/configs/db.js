const mongoose = require("mongoose")

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://fahadalim:fahadalim@cluster0.t6oqh.mongodb.net/todo?retryWrites=true&w=majority")
}