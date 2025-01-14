const {User}=require('../models/userModel');
const jwt=require('jsonwebtoken');

const peopleController=async(req,res)=>{
    const users=await User.find({verified:true});
    console.log(users);
    res.json(users);

}

module.exports=peopleController;