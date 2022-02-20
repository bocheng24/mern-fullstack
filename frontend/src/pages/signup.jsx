import React, { useState } from 'react'
import Header from '../components/header/Header'
import { TextField, Button } from '@mui/material';

import '../App.css'

function Signup() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confPassword: ''
  })

  const { username, email, password, confPassword } = formData

  const handleOnChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="form__container">
          <h1>Sign up an account</h1>
          <form>
            <TextField 
              fullWidth
              label="Enter your username"
              name="username"
              style={ {marginBottom: "25px"} }
              value={ username }
              onChange={ handleOnChange }
            /> 
            <TextField 
              fullWidth
              label="Enter your email"
              name="email"
              type="email"
              style={ {marginBottom: "25px"} }
              value={ email }
              onChange={ handleOnChange }
            /> 
            <TextField 
              fullWidth
              label="Enter your password"
              name="password"
              type="password"
              style={ {marginBottom: "25px"} }
              value={ password }
              onChange={ handleOnChange }
            /> 
            <TextField 
              fullWidth
              label="Confirm your password"
              name="confPassword"
              type="password"
              style={ {marginBottom: "25px"} }
              value={ confPassword }
              onChange={ handleOnChange }
            /> 

            <Button 
              variant="contained"
              fullWidth
              type="submit"
              color="success"
            >Sign Up</Button>
          </form>
        </div>
        </div>
    </div>
  )
}

export default Signup
