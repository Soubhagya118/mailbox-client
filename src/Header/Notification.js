import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {clearNotification} from '../store/authSlice'
const Notification = ({notification}) => {
const dispatch=useDispatch();


    let style;
    if(notification.title=='Loading!'){
        style='w-md bg-blue-500 flex justify-around'
    }else if(notification.title=='Fulfilled!'){
        style='w-md bg-green-500 flex justify-around'

    }else if(notification.title =='Error!'){
        style='w-md bg-red-500 flex justify-around'

    }

    
    useEffect(()=>{
        setTimeout(()=>{
            dispatch(clearNotification())

        },1000)
    },[])

  return (
    <div className={style}><h2>{notification.title}</h2><h2>{notification.status}</h2></div>

  )
}

export default Notification
