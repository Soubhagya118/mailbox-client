import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {openComposereducer} from '../store/mailDetailsSlice'


const LeftSideBar = () => {
  
const iscompose = useSelector(state=>state.Mail.isComposeOpen);
const dispatch=useDispatch();
const composeHandler=(e)=>{
e.preventDefault();
dispatch(openComposereducer());

}

  return (
    <div className='w-32 border-2 border-black h-12 flex flex-col'>
    <div>
    <button onClick={composeHandler} className='border-2 border-gray rounded-3xl shadow-lg px-5 py-2 '> compose</button>

    </div>
    <div>
      <ul className='flex flex-col'>
        <Link to='/home/inbox'>Inbox</Link>
        <Link to="/home/sent">Sent</Link>
      </ul>
    </div>
    </div>
  )
}

export default LeftSideBar
