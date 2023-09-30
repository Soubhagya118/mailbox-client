
import React, { useRef, useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useDispatch, useSelector } from 'react-redux';
import addmailDetails from '../store/mailDetailsSlice';
import RemoveIcon from '@mui/icons-material/Remove';
import { api } from '../Apis/Urls';
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
import db from './firebase';
import { collection, addDoc } from 'firebase/firestore';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Compose() {
const mailData=useSelector(state=>state.Mail?.mailDetails);
const dispatch=useDispatch();
const emailRef=useRef();
const subjectRef=useRef();

// ===================================== usestate hook=================//
let [to,setTo]= useState('');
let [sub,setSub] = useState('');
let [msg,setMsg]=useState('');

const formHandler=(e)=>{
e.preventDefault();
// alert(`name:'${to} ${msg} ${sub}`);

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
  timestamp:`${displayHours}:${minutes}:${seconds} ${period}`
}

const collectionRef = collection(db, 'email');
addDoc(collectionRef, dataToAdd)
  .then((docRef) => {
    console.log('Data added with ID: ', docRef.id);
    toast.success("email send")

  })
  .catch((error) => {
    console.error('Error adding data: ', error);
    return toast.error(error);
  });
  toast.success("email send")

setMsg('');
setSub('');
setTo('');
setTimeout(() => {
  dispatch(closeComposereducer());

}, 1000);


}


  // const handleConvertToHtml = (e) => {
  //   e.preventDefault();

  //   let email=emailRef.current.value;
  //   let idToken=mailData.idToken
  //   let sub=subjectRef.current.value;
  //   const contentState = editorState.getCurrentContent();
  //   const contentText = contentState.getPlainText();
  //   console.log(contentText);

  //   fetch(`https://mailbox-client-fa8fa-default-rtdb.firebaseio.com/mailbox?subject=${sub}&message=${contentText}`,{
  //       method:"POST",
  //       headers:{
  //           'Content-Type':'application/json'
  //       },
  //       body:{
  //         email:email
  //       }
       
  //   }).then(res=>{
  //       console.log(res)
  //       return res.json()
  //   }).then(data=>{
  //       console.log("compose data",data.name);
  //       dispatch(addmailDetails({message:contentText,id:data.name}))
  //   }).catch(err=>{
  //       console.log("err",err);
  //   })

  // };

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
<form onSubmit={formHandler}>
        <div className='w-full mt-1'>
    <div className='flex flex-col '>
      <input type='email'  placeholder='Recipents' className='w-44 h-7  border-b-2 p-2' value={to} onChange={(e)=>setTo(e.target.value)} required/>
      <input type='text' placeholder='Subject' className='w-44 h-7 border-b-2 p-2 ' value={sub} onChange={(e)=>setSub(e.target.value)} required/>
    <textarea rows={20} className='flex h-64' value={msg} onChange={(e)=>setMsg(e.target.value)}>

    </textarea>
    </div>
        </div>
{/* =========================================footer============================ */}
        <div className='flex justify-between px-3 py-2 shadow-lg bg-gray-100'>
          <div className=' '>
            <button className='border-0 border-blue-600 text-white bg-blue-600 rounded-sm shadow-md' type='submit'>
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
