import React from 'react'
import pp from "../assets/pp.png"
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from "yup"

export default function Recovery() {
    let initialvalues={
        password:"",
    }
    const otpSchema = Yup.object().shape({
        otp: Yup
        .string()
        .min(6)
          .required('*Otp is required'),
        
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
            <h2 className=' text-xl font-bold '>Recover your Password!</h2>
            <p className=' text-sm font-light'>Enter OTP to<br/>recover password</p>
        
<span className=' py-8  text-sm font-semibold text-slate-700'>Enter 6 digits OTP sent to your email address</span>           
           <Formik validationSchema={otpSchema} initialValues={initialvalues} onSubmit={handleSubmit}>
            <Form>

            <div className='flex flex-col gap-1 mb-2'>

            <Field type="text" placeholder="OTP here..." name="otp" className=" bg-slate-200  outline-none border-purple-600 border-2 px-2 py-1 rounded-md text-slate-950"/>
           <p className=' text-xs text-pink-800'>

           <ErrorMessage className='   text-xs text-pink-800' name='otp' />
           </p>
            </div>

            {/* <input placeholder='Username here'  className=' bg-slate-200  outline-none border-purple-600 border-2 px-2 py-1 rounded-md text-slate-950' /> */}
            <button type='submit' className=' w-full bg-purple-700 rounded-md px-2 py-1 text-slate-300'>Send</button>
        
        <p className=' text-xs font-semibold'>Can't get OTP? <button className=' bg-transparent outline-none border-none text-red-700'>Resend</button></p>
            </Form>
           </Formik>

        </div>

    </div>
  )
}
