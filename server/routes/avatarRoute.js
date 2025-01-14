const express=require('express');
const router=express.Router();
const avatarController=require('../controllers/avatarController');

router.get('/all',avatarController.getAllAvatars);
router.post('/',avatarController.avatarController); 

module.exports=router;