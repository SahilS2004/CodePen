import React from 'react';
import App from './Components/App';
import Home from './Home_lander /Home';
import Signup from './Login/Signup';
import Login from './Login/Login';
import Error from './Login/Error';
import {Routes, Route} from 'react-router-dom';


export default function Codepen() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/code_editor' element={<App />}/>
      <Route path='*' element={<Error />}/>
    </Routes>
  )
}
