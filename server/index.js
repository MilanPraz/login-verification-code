import express from "express";
import cors from "cors";
import morgan from "morgan"
import dotenv from "dotenv"
import {connectDB} from "./database/connectDB.js";
import userRouter from "./router/userRoute.js"

const app=express();
dotenv.config()
connectDB()


/**  middlewares */
app.use(express.json())
app.use(cors())
app.use(morgan('tiny')); //it console log in formatted way like : GET / 200 4 - 13.287 ms    GET /favicon.ico 404 150 - 9.184 ms
app.disable("x-powered-by")

/**The "X-Powered-By" header is an HTTP header that typically
 *  indicates the technology or framework used to power a web application. 
 * For example, if you're using Express.js, the default "X-Powered-By" header will be set to "Express".
 * so to prevent from hackers we use it
 * */



//router use
app.use(userRouter)


app.get("/",(req,res)=>{

    console.log("hello")
    res.send("Sent")
})

app.listen(8000,()=>{
    console.log("server is listening to Port 8000" )
})