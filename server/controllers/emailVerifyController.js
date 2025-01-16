const {User}=require('../models/userModel');
const {Token}=require('../models/tokenModel');

const verifyEmail=async(req,res)=>{
    try{
        //return res.json({message:'Verify route is working'});
        //console.log('Verify route is working');
        const user=await User.findById(req.params.id);

        if(!user){
            return res.status(400).send({message:"User doesn't exist"});
        }

        if(user.verified){
            return res.status(400).send({message:"Email already verified"});
        }

        console.log(req.params.id,user._id);
        
        
        const token=await Token.findOne({
            userId:user._id,
            // token: `${req.params.token}`,
            
        });

        if(!token){
            return res.status(400).send({message:"Invalid link"});
        }

        if(token.expiresAt<Date.now()){
            user.verificationLinkSent=false;
            await user.save();
            return res.status(400).send({message:"Verification link expired"});
        }

        user.verified=true;
        await user.save();
        return res.status(200).send({message:"Email verified successfully"});



    }catch(err){
        console.log("Error in verfiyEmail:",err);
        res.status(500).send({message:"Internal Server Error"});

    }
}

module.exports=verifyEmail;