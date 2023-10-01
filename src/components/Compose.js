
import React, { useRef, useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useDispatch, useSelector } from 'react-redux';
import RemoveIcon from '@mui/icons-material/Remove';
import HeightIcon from '@mui/icons-material/Height';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkIcon from '@mui/icons-material/Link';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PhotoIcon from '@mui/icons-material/Photo';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import {closeComposereducer} from '../store/mailDetailsSlice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';


function Compose() {
const mailData=useSelector(state=>state.Mail?.mailDetails);
const dispatch=useDispatch();
const emailRef=useRef();
const subjectRef=useRef();
const msgRef =useRef();
const form =useRef()

let unreadMsgs= mailData?.reduce((a,c)=>a+(c?.isRead==false?1:0),0);
// console.log("unreadMsgs ",unreadMsgs)
let myEmailId=useSelector(state=>state?.Auth?.users);

const formHandler=(e)=>{
e.preventDefault();
const emailid=myEmailId.email
const userName=myEmailId.name

const emailData ={
  to_email:emailRef.current.value,
  from_name:subjectRef.current.value,
  message:msgRef.current.value,
  from_email:emailid
  // timestamp:`${displayHours}:${minutes}:${seconds} ${period}`
}
emailjs
  .send('service_6nuq0yd', 'template_1ijiyar', emailData, 'PFY6Q6vphzYx2Lmea')
  .then((response) => {
    console.log('Email sent successfully:', response);
  })
  .catch((error) => {
    console.error('Email sending failed:', error);
  });





const to =emailRef.current.value;
const msg=msgRef.current.value;
const sub = subjectRef.current.value;

if(to==''){
  return toast.error("Recipents is required")
}else if(msg==""){
  return toast.error("Message is required")
}else if(sub==''){
  return toast.error("subject is required")
}
let date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const period = hours >= 12 ? "PM" : "AM";
const displayHours = hours % 12 === 0 ? 12 : hours % 12;



let dataToAdd= {
  to:to,
  subject:sub,
  message:msg,
  timestamp:`${displayHours}:${minutes}:${seconds} ${period}`,
  isRead:false
};


fetch(`https://mailbox-client-fa8fa-default-rtdb.firebaseio.com/${userName}.json`,{
  method:'POST',
  headers:{
    'Content-Type':'application/json'
  },body:JSON.stringify(dataToAdd)
})
  .then((res) => {
   return res.json()

  }).then(data=>{
    
    console.log('Data added with ID: ', data);
    toast.success("email send")

console.log("usesele",mailData);

  })
  .catch((error) => {
    console.error('Error adding data: ', error);
    return toast.error(error);
   });
  toast.success("email send")

emailRef.current.value='';
subjectRef.current.value='';
msgRef.current.value='';
setTimeout(() => {
  dispatch(closeComposereducer());

}, 1000);

}



  


  return (
    <>
      <div className='absolute bottom-0 w-96 h-96 border-2 border-gray right-3 rounded-lg p-0 bg-white shadow-2xl inline-block'>
        <div className='flex  bg-gray-800 w-full h-7 rounded-t-lg '>
      <div className='w-3/4'>
      <h1 className='text-white pl-1'>New message</h1>
    </div>
{/* ===========================================right============== */}
<div className=' flex gap-2'>
<RemoveIcon className='text-white cursor-pointer'/>
<HeightIcon className='text-white transform rotate-45 cursor-pointer'/>
<CloseIcon className='text-white cursor-pointer' onClick={()=>dispatch(closeComposereducer())}/>
</div>
</div>
{/* ============================================body================================== */}


 <form onSubmit={formHandler} ref={form}>
        <div className='w-full mt-1'>
    <div className='flex flex-col '>
      <input type='email' name="to_email"  placeholder='Recipents' className='w-44 h-7  border-b-2 p-2'  ref={emailRef} required/>
      <input type='text' name="form_name" placeholder='Subject' className='w-44 h-7 border-b-2 p-2 '  ref={subjectRef} required/>
    <textarea rows={20} name="message" className='flex h-64' ref={msgRef}/>

    {/* </textarea> */}
    </div>
        </div> 
{/* =========================================footer============================ */}
        <div className='flex justify-between px-3 py-2 shadow-lg bg-gray-100'>
          <div className=' '>
            <button className='border-0 border-blue-600 text-white bg-blue-600 rounded-sm shadow-md pl-3' type='submit' >
            send
           <ArrowDropDownIcon /></button>
          
          </div>
          <div >
          <FormatColorTextIcon className='p-1 hover:bg-gray-400 rounded-sm cursor-pointer'/>
            <AttachFileIcon className='p-1 hover:bg-gray-400 rounded-sm cursor-pointer'/>
            <LinkIcon className='p-1 hover:bg-gray-400 rounded-sm cursor-pointer'/>
            <InsertEmoticonIcon className='p-1 hover:bg-gray-400 rounded-sm cursor-pointer'/>
            <PhotoIcon className='p-1 hover:bg-gray-400 rounded-sm cursor-pointer'/>
            <PhonelinkLockIcon className='p-1 hover:bg-gray-400 rounded-sm cursor-pointer'/>
            <CreateIcon className='p-1 hover:bg-gray-400 rounded-sm cursor-pointer'/>
            <MoreVertIcon className='p-1 hover:bg-gray-400 rounded-sm cursor-pointer'/>
            <DeleteIcon className='p-1 hover:bg-gray-400 rounded-sm cursor-pointer'/>
          </div>
        </div>
 </form>       
      </div>
      <ToastContainer/>
    </>
  
  );
}

export default Compose;
