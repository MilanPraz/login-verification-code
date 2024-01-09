import mongoose from "mongoose";

const schema=mongoose.Schema;

 const UserSchema= new schema({
    username:{
        type:String,
        required:[true,"Please provide unique Username"],
        unique:[true,"Username Taken"]
    },
    email:{
        type:String,
        required:[true,"Please provide a email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please provide a password"],
        unique:false
    },
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    address:{
        type:String
    },
    phone:{
        type:Number
    },
    image:{
        type:String
    }


});

const userModel= mongoose.model.users ||mongoose.model("users",UserSchema);
export default userModel 
