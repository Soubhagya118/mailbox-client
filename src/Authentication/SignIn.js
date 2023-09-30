import React,{useRef} from 'react';
import { authUrl,api } from '../Apis/Urls';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {userDetails} from '../store/authSlice';

const SignIn = () => {


const navigate=useNavigate();
const userdata =useSelector(state=>state.Auth.users);
const dispatch = useDispatch();

const inputEmail=useRef();
const inputPass=useRef();

    const submitHandler=(e)=>{
        e.preventDefault();


        const email=inputEmail.current.value;
        const pass= inputPass.current.value;
  
// dispatch(showNotificationMessage({title:'Loading!',status:'Pending!'}))    
fetch(`${authUrl}signInWithPassword?key=${api}`,{
    method:'POST',
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        email:email,
        password:pass,
        returnSecureToken:true
    })
}).then(res=>{

  if(!res.ok){
   // toast.error("Bad request");
   console.log("res",res)
    throw new Error("Bad request")
  }
  return res.json()
})
    .then(data=>{
      
        console.log("login data",data);
        toast.success("Login Successfully");
        dispatch(userDetails({email:data?.email,localId:data?.localId,idToken:data?.idToken}))
        setTimeout(()=>navigate('/home/inbox'),1000)

    }).catch(err=>{
        console.log("error",err);
        toast.error(err.message)

    })

  

    }

  return (
    <section>

<div className='w-64 m-auto my-32 grid gap-4'>
    <section className='border-2 border-black-300 p-5 shadow-xl'>
    <h1 className='my-4 text-center text-2xl'>SignIn</h1>

    <form onSubmit={submitHandler} className='grid gap-2'>
        <input  className='border-2 border-black-300 p-1 rounded-md' type='email' placeholder='Email' ref={inputEmail}  data-testid="input-field" required/>
        <input className='border-2 border-black-300 p-1 rounded-md' type='password' placeholder='Password' ref={inputPass} required/>
        <button className='border-2 border-blue-700 mt-3 rounded-lg text-white bg-blue-700 p-1'>Sign in</button>
      </form>
    </section>
     <section>
        <div className='border-2 border-black-600 p-2 rounded-lg text-center bg-green-100 shadow-xl'>Don't have an account? <NavLink to='/signup'>SignUp</NavLink> </div>
     </section>
    </div>
    <ToastContainer  autoClose={2000}/>
    </section>
  )
}

export default SignIn