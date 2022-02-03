import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';


import './App.css';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard'

import { useState, useEffect } from 'react';

import Journal from './Pages/Notes/Journal';



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
      
      <Navbar />
      <Routes>
     
        <Route path='*' element={isLoggedin ? <Dashboard /> : <Navigate to='/login' />} />
        
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/notes' element={<Journal />}/>
        
 </Routes>
 
      </div>)
      
}
      
export default App;
