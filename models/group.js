const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    desc: String,
    date: Date,
    complete: Boolean,
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
})

const groupSchema = new mongoose.Schema({
	user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	name: String,
	photoUrl: String,
    tasks: [TaskSchema]
}, {
	timestamps: true
});


module.exports = {
    Group: mongoose.model('Group', groupSchema),
    Task: mongoose.model('Task', TaskSchema)
};
