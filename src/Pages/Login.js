import React from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import "./login.css"
                
function Login(props){
let navigate = useNavigate()
{
  const initialValues = {
    username:"",
    password:""
}
  const onSubmit = (values) => { 
    axios.post('http://localhost:4000/Login', values)
    .then((res) => {
      localStorage.setItem('username', res.data.username)
      localStorage.setItem('id', res.data.id)
      //localStorage.setItem('password', res.data.password)
      // props.logFunction()
      navigate('/dashboard')
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  }
  const validate = (values) => {
    const errors = {}
    if(!values.userName) {
      errors.userName = "Username Required"
  } else if(values.password.length < 8){ 
      errors.password = "Password must be 8 characters"
}}

  const formik = useFormik({
                 
    initialValues,
    onSubmit,
    validate
  })



return <div>
    <h2>Welcome</h2>
      <h2>Login Here</h2>
    <br></br>
    
    <form id='form' onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name='username'
        onChange={formik.handleChange}
        value={formik.values.username}
        placeholder='Username'
        />
        <br></br>
         <input
        type="password"
        name='password'
        onChange={formik.handleChange}
        value={formik.values.password}
        placeholder='Password'
        />
        <br></br>
        <button type="submit" disabled={!formik.isValid} >Submit</button>
    </form>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h3>Need an account? Register here</h3>
      <button id='reg' >Register</button>
    </div>
    }}
    export default Login