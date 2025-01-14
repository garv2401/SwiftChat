const Avatar=require('../models/avatars');


const avatarController=async(req,res)=>{
    const {link}=req.body;

    if(!link){
        return res.status(400).json({error:"Link is required"});
    }

    try{
        const newAvatar=new Avatar({link});
        await newAvatar.save();

        return res.status(200).json({success:true,message:"Avatar link added successfully"});

    }catch(err){
        console.error(err);
        return res.status(500).json({error:'Internal server error'});
    }
}

const getAllAvatars=async(req,res)=>{
    try{
        const avatars=await Avatar.find();
        return res.status(200).json({success:true,avatars});

    }catch(err){
        console.error(err);
        return res.status(500).json({error:"Internal server error"})
    }
}

module.exports={avatarController,getAllAvatars};