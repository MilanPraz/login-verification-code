import jwt  from "jsonwebtoken";


export async function auth(req,res,next){
    try{
        console.log("this is sddas")
        //access the token from header
        const token=req?.headers?.authorization?.split(" ")[1]
        console.log("this is bbbb")
        if(!token) return res.status(400).send({msg:"Access Denied"})
        console.log("this is token",token)
        //decoded user info
        const userDetail=await jwt.verify(token,process.env.JWT_SECRET);
        req.user=userDetail;

        // res.json(user)
        next()




    }catch(err){
        return res.status(500).send(err)
    }



}