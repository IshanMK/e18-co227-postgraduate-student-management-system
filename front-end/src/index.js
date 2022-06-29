import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import LoginPage from './pages/loginPage';
import RegisteredRegPage from './pages/reg-reg-page';
import ProRegPage from './pages/pro-reg-page';
import RegisterBasic from './pages/register-basic';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RegisterBasic/>
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();