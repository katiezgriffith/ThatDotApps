import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard'
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
      <h1>Application</h1>
      <Routes>
        <Route path = '/' element ={isLoggedin ? <Dashboard />:<Login logfunction = {loginUser}/>}/>
        <Route path ='register' element = {<Register />}/>
      </Routes>
      
      </div>)
}
      
export default App;
