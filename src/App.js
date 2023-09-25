import React from 'react'
import SignUp from './Authentication/SignUp'
import Header from './Header/Header'
import { Routes,Route } from 'react-router';
import SignIn from './Authentication/SignIn';
import Home from './components/Home';

const App = () => {

  return (
<section>
    <div>
    <Header/>
    </div>
    <Routes>
          <Route path='/' element={<SignIn/>}/>
          <Route exact path='/signup' element={<SignUp/>}/>
           <Route exact path='/home' element={<Home/>}/>
    </Routes>


        </section>
  )
}

export default App
