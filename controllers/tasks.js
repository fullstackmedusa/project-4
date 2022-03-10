const Task = require('../models/task');



module.exports = {
    create,
    index
}

async function create(req, res) {

	try {
		let task = await Task.create({
			user: req.user,
			description: req.body.description,
			duration: req.body.duration,
			complete: req.body.complete,
			
		})
		task = await task.populate('user')

		res.status(201).json({task: task})
	} catch(err){
		console.log(err, "Error (create ctrl)")
		res.status(400).json({err})
	}
}

async function index(req, res) {
	try {
		const tasks = await Task.find({user: req.user._id});
		res.status(200).json({tasks: tasks});
	} catch(err) {
		res.status(400).json({err})
	}
}



