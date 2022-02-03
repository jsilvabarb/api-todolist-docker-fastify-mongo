const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Task = new Schema ({
    name: { type: String, required: true },
    date: { type: String, required: true },
    status: { type: Boolean, required: true },
})

module.exports = mongoose.model('Task', Task)   