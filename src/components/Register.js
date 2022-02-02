import React from 'react';
import {useFormik} from 'formik'

function Register() {
  const initialValues = {
      username: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
  }
    const onSubmit = (values) => { 
      console.log(values)
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
      if(!values.name){
        errors.name = "Please enter your name."
      }  
      if(!values.confirmPassword){
        errors.name = "Please Confirm Password"
      }
      if(!values.password !== values.confirmPassword){
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
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name='name'
        onChange={formik.handleChange}
        value={formik.values.name}
        placeholder='Name'
        />
          <input
        type="text"
        name='username'
        onChange={formik.handleChange}
        value={formik.values.username}
        placeholder='Username'
        />
          <input
        type="text"
        name='email'
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder='Email'
        />
         <input
        type="password"
        name='password'
        onChange={formik.handleChange}
        value={formik.values.password}
        placeholder='Password'
        />
          <input
        type="password"
        name='confirmPassword'
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
        placeholder='Confirm Password'
        />
        <button type="submit" disabled={!formik.isValid} >Submit</button>
    </form>
    <div>
      {formik.errors.username ? <div>{formik.errors.username}</div> : null}
      

    </div>
    
    </div>;
}

export default Register;
 
