const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
	user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	name: String,
	members: Array,
    Tasks: [TasksSchema]
}, {
	timestamps: true
});

const TasksSchema = new mongoose.Schema({
    task: String,
    completed: Boolean,
    user_id:{type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})
module.exports = {
    Group: mongoose.model('Group', groupSchema),
    Tasks: mongoose.model('Tasks', TasksSchema)
};