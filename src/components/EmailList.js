import React, { useEffect, useState } from 'react';
import db from './firebase';
import { collection, getDocs,updateDoc,doc } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import {addmailDetails} from '../store/mailDetailsSlice'
import { Link } from 'react-router-dom';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const EmailList = () => {
    const [emails,setEmails]=useState([]);
const maildetails= useSelector(state=>state?.Mail?.maildetails)
const dispatch= useDispatch();


async function getData(){
  
  try {
      const res = await fetch(`https://mailbox-client-fa8fa-default-rtdb.firebaseio.com/email.json`,{
        method:'GET',
        headers:{
          'Content-Type':'application/json'
        }
      });
  const data= await res.json()
  console.log("data res getdata",data)
      let dataList=[]
      for(const doc in data){
        dataList.push({
          id:doc,
          to:data[doc].to,
          subject:data[doc].subject,
          message:data[doc].message,
          timestamp:data[doc].timestamp,
          isRead:data[doc]?.isRead
        });
      }
console.log("data",dataList)
      // to:to,
      // subject:sub,
      // message:msg,
      // timestamp:`${displayHours}:${minutes}:${seconds} ${period}`,
      // isRead:false

     //dataList= dataList.sort((a,b)=>a.data.timestamp-b.data.timestamp)
      setEmails([...dataList]);
      dispatch(addmailDetails([...dataList]))
    } catch (error) {
      console.error('Error getting documents: ', error);
    }
    

};


const updateMail=async(ele)=>{

  console.log(ele);
  const getData1 = collection(db,"email");
  console.log("getData update",getData1)
const id =ele.id;

const updatedData={
  ...ele,isRead:true
  };
  

  fetch(`https://mailbox-client-fa8fa-default-rtdb.firebaseio.com/email/${id}.json`,{
    method:'PUT',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(updatedData)
  }).then(res=>{
    return res.json()
  }).then(data=>{
    console.log("update data",data)
    getData()

  }).catch(err=>{
    console.log("error",err.message)
  })

}



useEffect(()=>{
    
  getData();
  },[emails]);
 

console.log(emails);
  return (
    <div>
   {console.log("emails",emails)}
      {emails.map((ele)=><Link key={ele.id} to={`/inbox/${ele.id}`} className='flex list-none border-2 border-white-50 justify-between px-2 cursor-pointer ' onClick={()=>updateMail({...ele})}>
      <div className='flex-1 flex gap-4'>
      {(ele.isRead==false)&&<FiberManualRecordIcon style={{color:'blue', fontSize:'15px',marginTop:"5px"}}/>}
      <p>
      {ele.to} 
      </p>
      <b>{ele.subject}</b>
       <p>{ele.message}</p>
      </div>
     <div>
     <p>{ele.timestamp}</p>

     </div>
          </Link>)}
    </div>
  )
}

export default EmailList
