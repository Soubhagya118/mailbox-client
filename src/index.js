import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import ReduxStore from './store/ReduxStore'
import { BrowserRouter } from 'react-router-dom';
import SignIn from './Authentication/SignIn';
const root = ReactDOM.createRoot(document.getElementById('root'));

const routes=[{
    path:'/',
    element:<SignIn/>

},{
    path:'/signup',
    // element:<SignUp/>
}]

root.render(
    <BrowserRouter>
    <Provider store={ReduxStore}>
    <App />
    </Provider>
    </BrowserRouter>
   
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
