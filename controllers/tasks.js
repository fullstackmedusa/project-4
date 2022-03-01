const {Task} = require('../models/group');
// console.log(Task);
const { v4: uuidv4 } = require("uuid");


const BUCKET = process.env.BUCKET;

module.exports = {
    create,
    index
}



async function create(req, res){
			console.log(req.params, req.body, req.user)
			// model talking to mongodb
			let task = await Task.create({
				desc: req.body.desc,
				date: req.body.date,
				complete: req.body.complete,
				user_id: req.user._id
			})

			task = await task.populate('user_id')

			// respond to the client
			// What file on the client can we log out this response?
			res.status(201).json({task})



	}


 
 


async function index(req, res) {
	try {
	  // this populates the user when you find the posts
	  // so you'll have access to the users information
	  // when you fetch teh posts
	  const tasks = await Task.find({}).populate("group_id").exec();
	  res.status(200).json({ tasks: tasks });
	} catch (err) {
	  res.status(400).json({ err });
	}
  }