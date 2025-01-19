const bcrypt=require('bcryptjs');
const {User,validateRegister}=require('../models/userModel');
const {Token}=require('../models/tokenModel');
const crypto=require('crypto');
const sendEmail=require('../utils/sendEmail'); 

const registerController=async(req,res)=>{
    try{
        const {error}=validateRegister(req.body);

        if(error){
            return res.status(400).send({message:error.details[0].message});
        }

        let user=await User.findOne({email:req.body.email});

        if(user && user.verified){
            return res.status(400).send({message:"User with given email already exists"});

        }

        if(user && user.verificationLinkSent){
            return res.status(400).send({message:"Verification link has already been sent"});
        }

        const salt=await bcrypt.genSalt((Number(process.env.SALT)));
        const hashPassword=await bcrypt.hash(req.body.password,salt);
        //save user with hashed password
        
        user=await new User({...req.body,password:hashPassword});

        const token=await new Token({
            userId:user._id,
            token:crypto.randomBytes(16).toString('hex'),
            createdAt:Date.now(),
            expiresAt:Date.now()+3600000
        }).save();

        const url=`${process.env.BASE_URL}/users/${user._id}/verify/${token.token}`;
        await sendEmail(user.email,"Verify Email",url);

        user.verificationLinkSent=true;
        await user.save();
        res.status(201).send({message:`Verification link sent to ${user.email}`});


    }catch(err){
        console.error("Error in registerController:",err);
        return res.status(500).send({message:"Internal Servwr Error"});
    }
}

module.exports=registerController;