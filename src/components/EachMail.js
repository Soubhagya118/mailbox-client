import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const EachMail = () => {
const param =useParams().id;
console.log("param",param)
    const eachEmail = useSelector(state=>state.Mail.mailDetails);
const findMail= eachEmail?.find(e=>e.id==param);
console.log("eachmail detial",findMail)

  return (
    <div>
      <div className='flex'>
        <AccountCircleIcon/>
            <p>{findMail.to}</p>
      </div>
      <div>{findMail.message}</div>
    </div>
  )
}

export default EachMail
