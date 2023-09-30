import React, { useEffect, useState } from 'react';
import db from './firebase';
import { collection, getDocs } from 'firebase/firestore';


const EmailList = () => {
    const [emails,setEmails]=useState([]);

    useEffect(()=>{
        async function getData(){
        const usersCollectionRef = collection(db, 'email');

        // Fetch data from the collection
        try {
            const querySnapshot = await getDocs(usersCollectionRef);
        
            let dataList=[]
            querySnapshot.forEach((doc) => {
              dataList.push({id:doc.id, data:doc.data()});
            });
           //dataList= dataList.sort((a,b)=>a.data.timestamp-b.data.timestamp)
            setEmails([...dataList])
          } catch (error) {
            console.error('Error getting documents: ', error);
          }
          

 };
 getData();
 },[emails]);

console.log(emails);
  return (
    <div>
   
      {emails.map((ele)=><li key={ele.id} className='flex list-none border-2 border-white-50 justify-between px-2'>
      <div className='flex-1 flex gap-4'>
      <p>
      {ele.data.to} 
      </p>
      <b>{ele.data.subject}</b>
       <p>{ele.data.message}</p>
      </div>
     <div>
     <p>{ele.data.timestamp}</p>

     </div>
          </li>)}
    </div>
  )
}

export default EmailList
