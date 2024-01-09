import userModel from "../model/userModel.js"
import bcrypt from "bcrypt"
import jwt  from "jsonwebtoken";



export async function loginUser(req,res){

try{
    const {email,password}=req.body;

    const user=await userModel.findOne({email});
    if(user){
        const correctPw=await bcrypt.compare(password,user.password)

        if(!correctPw){
            return res.status(400).send({msg:"Incorrect Password"})
        }else{

        

        //create jwt token
   const token= jwt.sign({
        userId:user.id,
        username:user.username
    },process.env.JWT_SECRET,{expiresIn:"24h"})
        

    return res.status(200).send({msg:"Login Succesful",token:token})

}


    }else{
        return res.status(400).send({msg:"User Doesn't Exist"})
    }


}catch(err){
    console.log(err)
    return res.status(500).send(err)
}

}