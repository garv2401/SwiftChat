

const removeCookieController=async(req,res)=>{

    const token=req.cookies["authToken"];

    if(token){
        res.clearCookie("authToken", { path: "/" });
        return res.status(200).send({ message: "Cookie removed" });
    }else{
        return res.status(401).send({ message: "authToken cookie doesnt exists" });
    }

}

module.exports=removeCookieController;