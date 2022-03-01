const express = require('express');
const router = express.Router();
const tasksCtrl = require('../../controllers/tasks');

// /*---------- Public Routes ----------*/


router.post('/group/:id/tasks', isAuthenticated, tasksCtrl.create);
router.get('/group/:id', tasksCtrl.index)


/*---------- Protected Routes ----------*/
function isAuthenticated(req, res, next){
	if(req.user){
		next()
	} else {
		res.status(401).json({data: 'Not Authorized!'})
	}
}

module.exports = router;