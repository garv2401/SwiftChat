const {User}=require('../models/userModel');
const jwt=require('jsonwebtoken')

const profileController=async(req,res)=>{
    const token=req.cookies?.authToken;
    if(token){
        jwt.verify(token,process.env.JWTPRIVATEKEY,{},async(err,userData)=>{
            console.log(userData);
            if(err){
                throw err;
            }

            const user=await User.findOne({_id:userData._id});
            res.json(user);
        })
    }else{
        res.status(401).json('No user token')
    }
}

const profileUpdate=async(req,res)=>{
    const token=req.cookies?.authToken;
    if(token){
        jwt.verify(token,process.env.JWTPRIVATEKEY,{},async (err,userData)=>{
            console.log(userData);
            if(err) throw err;
        })
    }
    else{
        return res.status(401).json('No Token');
    }
    const {firstName,lastName,email,avatarLink}=req.body;
    const user=await User.findOne({email});

    if(user){
        user.firstName=firstName;
        user.lastName=lastName;
        user.avatarLink=avatarLink;
        user.email=email;
        await user.save();
        return res.status(200).send({message:"Profile Updated Successfully"})

    }else{
        return res.status(404).send({message:"User Not Found"})
    }

}

module.exports={profileController,profileUpdate};