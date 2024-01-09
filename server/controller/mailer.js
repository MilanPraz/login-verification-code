import nodemailer from "nodemailer";
import Mailgen from "mailgen";
import dotenv from "dotenv"
dotenv.config()

console.log(process.env.EMAIL)
let nodeConfig={
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }

}

let transporter=nodemailer.createTransport(nodeConfig)



let mailGenerator=new Mailgen({
    theme:"default",
    product:{
        name:"Mailgen",
        link:"https://mailgen.js/"
    }
})

export const registerMail=async(req,res)=>{
    try{
        const {username,userEmail,text,subject}=req.body;

        let email={
            body:{
                name:username,
                intro:text||"Welcome to my world. We are excited to have you",
                outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
            }
        }

        let emailBody=mailGenerator.generate(email);

        let message={
            from:process.env.EMAIL,
            to:userEmail,
            subject:subject || "Signup Successful",
            html:emailBody
        }

        //sendmail
        transporter.sendMail(message).then(()=> res.status(200).send({msg:"You should receive an email from us."})).catch((err)=>{
            console.log(err)
            return res.status(500).send(err)
        })



    }catch(Err){

        console.log(Err)
        re.status(500).send(Err)
    }


}



