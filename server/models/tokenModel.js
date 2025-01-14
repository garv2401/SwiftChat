const mongoose=require('mongoose');

const tokenSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,required:true,ref:'user',unique:true
    },
    token:{type:String,required:true},
    createdAt:{type:Date,defaul:Date.now},
    expiresAt:{type:Date,defaul:Date.now+3600000},
})

const Token=mongoose.model('token',tokenSchema);

module.exports={Token};