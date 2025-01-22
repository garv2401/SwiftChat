const bcrypt=require("bcryptjs");
const {User,validateLogin}=require('../models/userModel');

const loginController=async(req,res)=>{ 
    try{
        const {error}=validateLogin(req.body.data);
        if(error){
            return res.status(400).send({message:error.details[0].message});
        }

        let user=await User.findOne({email:req.body.email});

        if(!user){
            return res.status(400).send({message:"Invalid Email"});
        }

        const validPass=await bcrypt.compare(req.body.password,user.password);

        if(!validPass){
            return res.status(400).send({message:"Invalid Password"});
        }

        if(!user.verified){
            return res.status(400).send({message:"User Doesn't Exist"});
        }

        const token=user.generateAuthToken();
        //localStorage.setItem('authToken', token);
        res.status(200)
           .cookie("authToken",token,{
            httpOnly:false,
            sameSite:"none",
            secure:true,
            expires:new Date(Date.now()+7*24*60*60*1000),
           })
           .send({message:"Login Sucessful",status:200});
         return;


    }catch(err){
        console.log('Error in login controller:',err);
        return res.status(500).send({message:"Internal server error"});
    }
}

module.exports=loginController;