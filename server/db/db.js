const mongoose=require('mongoose');

module.exports=async()=>{
    try{
        await mongoose.connect(process.env.DB);
        console.log('DB CONNECTED SUCCESSFULLY')

    }catch(err){
        console.log(err);
        console.log('COULD NOT CONNECT TO DB');
    }
}