import React, { useRef } from 'react'
import { authUrl,api } from '../Apis/Urls';
const SignUp = () => {

    const inputEmail=useRef();
    const inputPass=useRef();
    const inputConPass=useRef();


    const submitHandler=(e)=>{
        e.preventDefault();
        const email=inputEmail.current.value;
        const pass= inputPass.current.value;
        const conPass= inputPass.current.value;
  if(pass===conPass){      
fetch(`${authUrl}signUp?key=${api}`,{
    method:'POST',
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        email:email,
        password:pass,
        returnSecureToken:true
    })
}).then(res=>res.json())
    .then(data=>
        console.log(data)
    ).catch(err=>{
        console.log("error")
    })

  }

    }
  return (
    <div className='w-64 m-auto my-32 grid gap-4'>
    <section className='border-2 border-black-300 p-5 shadow-xl'>
    <h1 className='my-4 text-center text-2xl'>SignUp</h1>

    <form onSubmit={submitHandler} className='grid gap-2'>
        <input  className='border-2 border-black-300 p-1 rounded-md' type='email' placeholder='Email' ref={inputEmail} required/>
        <input className='border-2 border-black-300 p-1 rounded-md' type='password' placeholder='Password' ref={inputPass} required/>
        <input className='border-2 border-black-300 p-1 rounded-md' type='password' placeholder='Confirm Password' ref={inputConPass} required/>
        <button className='border-2 border-blue-700 mt-3 rounded-lg text-white bg-blue-700 p-1'>Sign up</button>
      </form>
    </section>
     <section>
        <div className='border-2 border-black-600 p-2 rounded-lg text-center bg-green-100 shadow-xl'>Have an account? <span>Login</span> </div>
     </section>
    </div>
  )
}

export default SignUp
