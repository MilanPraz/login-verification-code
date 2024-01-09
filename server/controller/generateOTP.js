import otpGenerator from "otp-generator"
import userModel from "../model/userModel.js";
import bcrypt from "bcrypt"



export async function generateOTP(req,res){
    try{

        console.log(req.app.locals.OTP)
        const {username}=req.query;
        //check user exist
        const user=await userModel.findOne({username});
        if(!user){
            return res.status(400).send({msg:"User not found!"})
        }

        req.app.locals.OTP=await otpGenerator.generate(6,{lowerCaseAlphabets:false,upperCaseAlphabets:false,specialChars:false})
// console.log("yeta ko otp hia",otp)

console.log("lcoals wala otp",req.app.locals.OTP)

return res.status(201).send({code:req.app.locals.OTP})



    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }



}
export async function verifyOTP(req,res){
    try{

        
        const {username,code}=req.query;
        console.log("code wala code",code)
        console.log(req.app.locals.OTP)
        
        //check user exist
        const user=await userModel.findOne({username});
        if(!user){
            return res.status(400).send({msg:"User not found!"})
        }

        if(parseInt(req.app.locals.OTP)===parseInt(code)){
            console.log(" yeta  first")
            req.app.locals.OTP=null;
            req.app.locals.resetSession=true; //start session for resetting pw
            return res.status(201).send({msg:"Verify Successful"})
        }
        return res.status(400).send({msg:"Invalid OTP"})





    }catch(err){
        return res.status(500).send(err)
    }



}

export async function createResetSession(req,res){

    if(req.app.locals.resetSession){
        req.app.locals.resetSession=false;//allow access to this route only once
        return res.status(200).send({msg:"Access Granted"})
    }
    return res.status(440).send({error:"Session Expired"})
}

export async function resetPassword(req,res){
    try{


        const {username,password}=req.body;

        if(!req.app.locals.resetSession){
            return res.status(400).send({msg:"Session Expired!"})
        }
        //check user exist
        const user=await userModel.findOne({username});
        if(!user){
            return res.status(400).send({msg:"User not found!"})
        }

        const hasedPw=await bcrypt.hash(password,10)

        await userModel.updateOne({username:user.username},{
            password:hasedPw

        })
        req.app.locals.resetSession=false;//allow access to this route only once

return res.status(200).send({msg:"Password Updated"})


    }catch(err){
        console.log(err)
    }
}