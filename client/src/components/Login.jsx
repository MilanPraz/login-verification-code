import React from 'react'
import pp from "../assets/pp.png"
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from "yup"
import { Link } from 'react-router-dom'

export default function Login() {
    let initialvalues={
        username:"",
    }
    const LoginSchema = Yup.object().shape({
        username: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('*Username is required'),
        
      });

    function handleSubmit(values){
        console.log("heloooooooooooo")
        alert(JSON.stringify(values))
        // setSubmitting(false)
        console.log(values)
    }
  return (
    <div>
        <div className=' flex items-center justify-center flex-col gap-2 bg-slate-200 p-8 rounded-md drop-shadow-sm text-slate-950'>
            <h2 className=' text-xl font-bold '>Hello Again!</h2>
            <p className=' text-sm font-light'>Exploring More by<br/> connecting with us</p>
        
            <img  className=' h-52 w-52 rounded-full' alt="pp" src={pp}></img>
           
           <Formik validationSchema={LoginSchema} initialValues={initialvalues} onSubmit={handleSubmit}>
            <Form>

            <div className='flex flex-col gap-1 mb-2'>

            <Field type="text" placeholder="username here..." name="username" className=" bg-slate-200  outline-none border-purple-600 border-2 px-2 py-1 rounded-md text-slate-950"/>
           <p className=' text-xs text-pink-800'>

           <ErrorMessage className='   text-xs text-pink-800' name='username' />
           </p>
            </div>

            {/* <input placeholder='Username here'  className=' bg-slate-200  outline-none border-purple-600 border-2 px-2 py-1 rounded-md text-slate-950' /> */}
            <button type='submit' className=' w-full bg-purple-700 rounded-md px-2 py-1'>Let's Go</button>
        
        <p className=' text-xs font-semibold'>Not a Member <Link to={"/register"} className=' text-red-700'>Register Now</Link></p>
            </Form>
           </Formik>

        </div>

    </div>
  )
}
