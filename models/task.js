const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    description: String,
    duration: String,
    complete: Boolean,
})



module.exports = {
    Task: mongoose.model('Task', TaskSchema)
};
