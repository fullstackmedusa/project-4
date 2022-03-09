const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	description: String,
	duration: String,
	complete: Boolean,
	
});



module.exports = {
    Task: mongoose.model('Task', TaskSchema)
};
