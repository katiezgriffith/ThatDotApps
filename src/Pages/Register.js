import React from 'react';
import {useFormik} from 'formik'
import axios from 'axios';
import "./register.css"

function Register() {
  const initialValues = {
      username: "",
      firstName: "",
      lastName:"",
      email: "",
      password: "",
      confirmPassword: ""
  }
    const onSubmit = (values) => { 
      axios.post('http://localhost:4000/register', values)
      .then((res) => {
        console.log(res.data)
        localStorage.setItem('userName', res.data[0][0].userame)
        localStorage.setItem('id', res.data[0][0].id)
        localStorage.setItem('firstName', res.data[0][0].firstName)
    })
    .catch((err) => console.log(err.response.data))
    }
    const validate = (values) => {
      const errors = {}
      if (!values.username) {
        errors.username = "Username Required"
      } 
      if(!values.password){
        errors.password = "Password Required"
      } else if (values.password.length < 8) {
        errors.password = "Password must be longer than 8 characters."
      } 
      if(!values.firstName){
        errors.name = "Please enter your first name."
      }  
      if(!values.lastName){
        errors.lastName= "Please enter your last name"
      }
      if(!values.confirmPassword){
        errors.confirmPassword = "Please Confirm Password"
      }
      if(values.password !== values.confirmPassword){
        errors.confirmPassword = "Password must match"
      }
      if(!values.email){
        errors.email = "Please enter an email address"
      }
      return errors
    }
  
    const formik = useFormik({
                   
      initialValues,
      onSubmit,
      validate
    })
  return <div>
    <h2>Register</h2>
    <form id="form" onSubmit={formik.handleSubmit}>
      <br></br>
      <input 
        type="text"
        name='firstName'
        onChange={formik.handleChange}
        value={formik.values.name}
        placeholder='First Name'
        />
        <br></br>
        <input 
        type="text"
        name='lastName'
        onChange={formik.handleChange}
        value={formik.values.name}
        placeholder='Last Name'
        />
        <br></br>
        <input
        type="text"
        name='username'
        onChange={formik.handleChange}
        value={formik.values.username}
        placeholder='Username'
        />
        <br></br>
          <input
        type="text"
        name='email'
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder='Email'
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
          <input
        type="password"
        name='confirmPassword'
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
        placeholder='Confirm Password'
        />
        <br></br>
        <button type="submit" disabled={!formik.isValid} >Submit</button>
    </form>
    <div>
      {formik.errors.username ? <div>{formik.errors.username}</div> : null}
      {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
      {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      {formik.errors.password ? <div>{formik.errors.password}</div> : null}
      {formik.errors.confirmPassword ? <div>{formik.errors.confirmPassword}</div> : null}


    </div>
    </div>;
}

export default Register;
 
