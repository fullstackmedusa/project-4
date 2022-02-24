const express = require('express');
const router = express.Router();
const groupsCtrl = require('../../controllers/groups');
const multer = require('multer');
const upload = multer(); // <- handles multipart/formdata requests(photos)
// /*---------- Public Routes ----------*/

// photo is the key on the formData object in the AddPost component
router.post('/', isAuthenticated, upload.single('photo'), groupsCtrl.create);
router.get('/', groupsCtrl.index)


/*---------- Protected Routes ----------*/
function isAuthenticated(req, res, next){
	if(req.user){
		next()
	} else {
		res.status(401).json({data: 'Not Authorized!'})
	}
}



module.exports = router;