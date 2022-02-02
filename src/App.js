import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard'
import Home from './components/Home/Home'
import Add from './components/Addcomponent/Add'
import { useState, useEffect } from 'react';
import Calen from './components/Calendar/Calender';


function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const loginUser = () => setIsLoggedin(!isLoggedin)
  useEffect(() => {
    if(localStorage.getItem('id')) {
      setIsLoggedin(true)
    }
  }, [])  
  
   return (
    
    <div className="App">
      <h1>ThatDotApp</h1>
      <Routes>
        <Route path = '*' element ={isLoggedin ? <Dashboard />:<Login logFunction = {loginUser}/>}/>
        <Route path ='/register' element = {<Register />}/>
        <Route path ='/home' element = {<Home />}/>
        <Route path ='/add' element ={<Add />}/>
        <Route path = 'calender' element = {<Calen />}/>
      </Routes>
      
      </div>)
}
      
export default App;
