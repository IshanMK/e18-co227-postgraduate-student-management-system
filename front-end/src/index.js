import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar';
import Login from './components/login';
import Registration from './components/register';
import RegRegister from './components/regRegister';
import ProvisionalRegister from './components/provisionalRegister';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Registration/>
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
