const group = require('../models/group');
const {Task, Group} = require('../models/group');
// console.log(Task);
// const { v4: uuidv4 } = require("uuid");


const BUCKET = process.env.BUCKET;

module.exports = {
    create,
    // index,
    
}



async function create(req, res){
 
    try {
        const task = await (await Group.findByIdAndUpdate(req.params.id, {$push: {tasks: req.params}}));
        res.status(201).json(task, 'task added')
    } catch(err){
       
        res.status(400).json({err})
    }
    
}


 
 


// async function index(req, res) {
// 	try {
// 	  // this populates the user when you find the posts
// 	  // so you'll have access to the users information
// 	  // when you fetch teh posts
// 	  const tasks = await Task.find({}).populate("groupId").exec();
// 	  res.status(200).json({ tasks: tasks });
// 	} catch (err) {
// 	  res.status(400).json({ err });
// 	}
//   }

// const task = await Group.findById(req.params.id);
// group.tasks.push({ desc:req.tasks.desc, date:req.tasks.date, complete:req.tasks.complete, groupId: req.group._id}); //mutating a document
// await group.save()// save it