import React from 'react';
import { Route, Routes } from 'react-router';
import EmailList from './EmailList';
import Sent from './Sent';

const EmailMidPart = () => {
  return (
    <div>
      <Routes>
        <Route path='/inbox' element={<EmailList/>}/>
        <Route path='/sent' element={<Sent/>}/>
         
      </Routes>
    </div>
  )
}

export default EmailMidPart
