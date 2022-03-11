const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	description: String,
	duration: String,
	
	
});



module.exports = mongoose.model('Task', taskSchema);
