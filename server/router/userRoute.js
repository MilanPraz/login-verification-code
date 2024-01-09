import express from "express";
import { regitserUser } from "../controller/registerUser.js";
import { loginUser } from "../controller/loginUser.js";
import { createResetSession, generateOTP, resetPassword, verifyOTP } from "../controller/generateOTP.js";
import { localVariable } from "../middleware/localVariable.js";
import { getUser, updateUser } from "../controller/user.js";
import { auth } from "../middleware/auth.js";
import { registerMail } from "../controller/mailer.js";

const router=express.Router();


 router.post("/api/register",regitserUser);
 router.post("/api/login",loginUser);
 router.get("/api/otpGenerate",localVariable,generateOTP);
 router.get("/api/otpVerify",localVariable,verifyOTP);
 router.get("/api/createResetSession",localVariable,createResetSession);

 router.put("/api/resetPassword",localVariable,resetPassword)

 router.get("/api/getUser", auth ,getUser)
 router.put("/api/updateUser", auth ,updateUser)

 router.post("/api/registerMail",registerMail)


export default router

