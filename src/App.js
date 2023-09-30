import React from 'react'
import SignUp from './Authentication/SignUp'
import Header from './Header/Header'
import { Route, Routes } from 'react-router-dom';
import SignIn from './Authentication/SignIn';
import Home from './components/Home';
import { useSelector } from 'react-redux';
import Sent from './components/Sent';
import EmailList from './components/EmailList';
const App = () => {
 
  const islogin= useSelector(state=>state.Auth.islogin);


  return (
<section>
    <div>
    {islogin&&<Header/>}
    </div>
    <Routes>
          <Route path='/' element={<SignIn/>}/>
          <Route exact path='/signup' element={<SignUp/>}/>
           {islogin&&<Route exact path='/home' element={<Home/>}/>}

   </Routes>  
{islogin && <Home/>}
        </section>
  )
}

export default App
