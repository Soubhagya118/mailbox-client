import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {clearNotification} from '../store/authSlice';
import Notification from './Notification';

const Header = () => {
    const notification=useSelector(state=>state.Auth.notification);
const dispatch=useDispatch();

  return (
    <div>
      {(notification.title!='')&& <Notification notification={{...notification}}/>}
      
      <div className='w-md  bg-gradient-to-r from-white to-blue-100 h-10 text-black justify-center text-center'>
        <ul>
            <li>Home</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
