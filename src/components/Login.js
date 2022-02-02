import React from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
                
function Login() {
  const initialValues = {
    username:"",
    password:""
}
  const onSubmit = (values) => { 
    axios.post('http://localhost:4000/Login', values)
    .then((res) => {
      console.log(res.data)
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
    <h2>Login Page</h2>
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name='username'
        onChange={formik.handleChange}
        value={formik.values.username}
        placeholder='Username'
        />
         <input
        type="password"
        name='password'
        onChange={formik.handleChange}
        value={formik.values.username}
        placeholder='Password'
        />
        <button type="submit" disabled={!formik.isValid} >Submit</button>
    </form>
    </div>
    }
    export default Login