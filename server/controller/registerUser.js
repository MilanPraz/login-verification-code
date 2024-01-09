import userModel from "../model/userModel.js";
import bcrypt from "bcrypt"


export async function regitserUser(req,res){
try{
    const {username,password,image,email}=req.body;
    console.log(username,password,email)

    //check the existing username
    const existUsername=await userModel.findOne({username});
    if(existUsername){
        return res.status(400).send({msg:"Please use Unique Username"})
    }

    //check the existing email
    const existEmail=await userModel.findOne({email});
    if(existEmail){
        return res.status(400).send({msg:"Please use Unique email"})
    }

    //password hasing
    const hasedPassword=await bcrypt.hash(password,10);

    const newUser=new userModel({
        username,
        email,
        image:image || "",
        password:hasedPassword
    })

    newUser.save();

    return res.status(200).send(newUser)

}catch(err){
    console.log(err)
    return res.status(500).send(err)
}


}