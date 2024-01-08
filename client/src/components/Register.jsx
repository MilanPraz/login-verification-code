import React, { useState } from 'react'
import pp from "../assets/pp.png"
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from "yup"
import { Link } from 'react-router-dom'
import converter from '../helper/convertToBase64'

export default function Register() {
    const [image,setImage]=useState()
    let initialvalues={
        username:"",
        email:"",
        password:""
    }

    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

    const LoginSchema = Yup.object().shape({
        username: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('*Username is required'),
        email:Yup.string().email("Invalid email address").required("Please enter your email"),
        password: Yup
        .string()
        .matches(passwordRules,{message:"Please create a strong password"})
          .required('*Password is required'),
        
      });

    async function handleSubmit(values){
        console.log("heloooooooooooo")
        // alert(JSON.stringify(values))

        values=await Object.assign(values,{image:image||""})
        // setSubmitting(false)
        console.log(values)
    }

    //formikm doesnt support file upload so need a handler
    async function imageUpload(e){
        const base64=await converter(e.target.files[0]);
        setImage(base64)
        console.log(base64)


    }

  return (
    <div>
        <div className=' flex items-center justify-center flex-col gap-2 bg-slate-200 p-8 rounded-md drop-shadow-sm text-slate-950'>
            <h2 className=' text-xl font-bold '>Register Now!</h2>
            <p className=' text-sm font-light'>Happy to join you!</p>
            <div>
            <input  id='myinput' onChange={(e)=>imageUpload(e)} type='file'/>
            <img  className=' h-52 w-52 rounded-full object-cover' alt="pp" src={image||pp}></img>
            <button onClick={()=>document.querySelector("#myinput").click()} className=' mt-2 text-xs font-bold text-slate-300'>Edit Picture</button>
            </div>
           
           <Formik validationSchema={LoginSchema} initialValues={initialvalues} onSubmit={handleSubmit}>
            <Form>

            <div className='flex flex-col gap-1 mb-2'>

            <Field type="text" placeholder="username" name="username" className=" bg-slate-200  outline-none border-purple-600 border-2 px-2 py-1 rounded-md text-slate-950"/>
           <p className=' text-xs text-pink-800'>

           <ErrorMessage className='   text-xs text-pink-800' name='username' />
           </p>
            </div>
            <div className='flex flex-col gap-1 mb-2'>

            <Field type="text" placeholder="email" name="email" className=" bg-slate-200  outline-none border-purple-600 border-2 px-2 py-1 rounded-md text-slate-950"/>
           <p className=' text-xs text-pink-800'>

           <ErrorMessage className='   text-xs text-pink-800' name='email' />
           </p>
            </div>
            <div className='flex flex-col gap-1 mb-2'>

            <Field type="text" placeholder="password" name="password" className=" bg-slate-200  outline-none border-purple-600 border-2 px-2 py-1 rounded-md text-slate-950"/>
           <p className=' text-xs text-pink-800'>

           <ErrorMessage className='   text-xs text-pink-800' name='password' />
           </p>
            </div>

            {/* <input placeholder='Username here'  className=' bg-slate-200  outline-none border-purple-600 border-2 px-2 py-1 rounded-md text-slate-950' /> */}
            <button type='submit' className=' w-full bg-purple-700 rounded-md px-2 py-1'>Register</button>
        
        <p className=' text-xs font-semibold'>Already have an Account? <Link to={"/"} className=' text-red-700'>Login here</Link></p>
            </Form>
           </Formik>

        </div>

    </div>
  )
}
