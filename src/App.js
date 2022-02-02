import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard'
import Home from './Home'
import { useState, useEffect } from 'react';


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
      </Routes>
      
      </div>)
}
      
export default App;
