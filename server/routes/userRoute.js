const express=require('express')
const router=express.Router();
const loginController=require('../controllers/loginController');
const registerController=require('../controllers/registerController');
const messageController=require('../controllers/messageController');
const peopleController=require('../controllers/peopleController');
const profileController=require('../controllers/profileController');
const verifyEmail=require('../controllers/emailVerifyController');
const googleAuthController=require('../controllers/googleAuthController')
const checkTokenController=require('../controllers/checkTokenController');
const removeCookieController=require('../controllers/removeCookieController');

router.post('/register',registerController);
router.post('/auth/google',googleAuthController);
router.post('/login',loginController);
router.get('/profile',profileController.profileController);
router.put('/profile/update',profileController.profileUpdate);
router.get('/message/:userId',messageController);
router.get('/people',peopleController);
router.get('/:id/verify/:token',verifyEmail);
router.get('/checkToken',checkTokenController);
router.get('/removeToken',removeCookieController);
module.exports=router;


