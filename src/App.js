import React from 'react'
import SignUp from './Authentication/SignUp'
import Header from './Header/Header'
import { Route, Routes } from 'react-router-dom';
import SignIn from './Authentication/SignIn';
import Home from './components/Home';
import { useSelector } from 'react-redux';


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
           {/* <Route exact path='/home/#inbox' element={<EmailList/>}/> */}
           {/* <Route exact path='/home/#sent' element={<Sent/>}/>*/}
   </Routes>  
{islogin && <Home/>}
        </section>
  )
}

export default App
