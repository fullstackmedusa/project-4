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
		})
		task = await task.populate('user')
        console.log(req.body, "<--- req.body")

		res.status(201).json({task: task})
	} catch(err){
		console.log(err, "Error (create ctrl)")
		res.status(400).json({err})
	}
}

async function index(req, res){
    try {
         const tasks = await Task.find({}).populate('user').exec()
         res.status(200).json({tasks: tasks})
    } catch(err){
    
    }
}
    
    // after you upload the photo, you'll want to create a Post,
    // make sure you refer to the Post model to see what properties the schema needs
  
    // respond back to the client with the create post


// async function create(req, res) {
//     console.log(req.body, '<-- req.body')

// 	try {
// 		let task = await Task.create({
// 			user: req.user,
// 			description: req.body.description,
// 			duration: req.body.duration,
// 			complete: req.body.complete,
			
// 		})
// 		task = await task.populate('user')

// 		res.status(201).json({task: task})
// 	} catch(err){
// 		console.log(err, "Error (create ctrl)")
// 		res.status(400).json({err})
// 	}
// }

// async function index(req, res) {
// 	try {
// 		const tasks = await Task.find({user: req.user._id});
// 		res.status(200).json({tasks: tasks});
// 	} catch(err) {
// 		res.status(400).json({err})
// 	}
// }



