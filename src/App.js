import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';


import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard'

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
      
      <Navbar />
      <Routes>
     
        <Route path='*' element={isLoggedin ? <Dashboard /> : <Navigate to='/login' />} />
        
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />}/>
        
 </Routes>
 
      </div>)
      
}
      
export default App;
