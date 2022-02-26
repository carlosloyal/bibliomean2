const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    userID: String,
    name: String,
    description: String,
    status: String,
    date: {type:date, default: Date.now}
})

const Task = mongoose.model('task, taskSchema')
module.exports = Task