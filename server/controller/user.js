


//to get single user data from username

import userModel from "../model/userModel.js";

export async function getUser(req,res){
try{

    const {userId}=req.user

    //find if exist
    const user=await userModel.findById(userId);

    if(!user) return res.status(400).send({msg:"User not found"});

    return res.status(200).send(user)



}catch(Err){
    console.log(Err)
return res.status(500).send(Err.message)
}

}

//to update the user data
export const updateUser=async (req,res)=>{
    try{

        const {userId}=req.user

    //find if exist
    const user=await userModel.findById(userId);   
    if(!user) return res.status(400).send({msg:"User not found"});

    const updatedUser=await userModel.findByIdAndUpdate(userId,req.body,{new:true});
console.log(updatedUser)
    return res.status(201).send("User Updated Successfully")


    }catch(err){
        console.log(err);
        res.status(500).send(err)
    }


    
}

