import React from 'react'
import Compose from './Compose';
import Header from '../Header/Header'
import { useDispatch, useSelector } from 'react-redux';
import {openComposereducer} from '../store/mailDetailsSlice'
import EmailList from './EmailList';
import { NavLink, Route, Routes } from 'react-router-dom';
import Sent from '../components/Sent';
import { useNavigate } from 'react-router-dom';
import EmailMidPart from './emailMidPart';

const Home = () => {
const navigate=useNavigate();

const iscompose=useSelector(state=>state.Mail.isComposeOpen);
const dispatch=useDispatch();
const composeHandler=(e)=>{
e.preventDefault();
dispatch(openComposereducer());

}

  return (
  
    <>
      
    <div className='flex w-full gap-2'>
    <nav className='w-32 border-2 border-black h-12 flex flex-col'>
    <div>
    <button onClick={composeHandler} className='border-2 border-gray rounded-3xl shadow-lg px-5 py-2 '> compose</button>

    </div>
    <div>
      <ul className='flex flex-col'>
        <NavLink to='/inbox'>Inbox</NavLink>
        <NavLink to="/sent">Sent</NavLink>
      </ul>
    </div>
    </nav>
    {/* ===========================================================midpart==================================================== */}

    <div className='flex-1 border-2 border-black'>
    <Routes>
        <Route exact path='/inbox' element={<EmailList/>}/>
        <Route exact path='/sent' element={<Sent/>}/>
         
      </Routes>
</div>

{/* =============================================================right side bar =============================================== */}

<div className='w-32 border-2 border-black'>
      {iscompose && <Compose/>}
      </div>
</div>
    </>
  )
}

export default Home