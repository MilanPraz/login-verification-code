import mongoose from "mongoose";

export async function connectDB(){

    await mongoose.connect(process.env.MONGODB_URI).then(()=>console.log("MOngodb Connected")).catch((err)=>console.log(err))
}