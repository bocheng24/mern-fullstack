import React, { useState } from 'react'
import Header from '../components/header/Header'
import { TextField, Button } from '@mui/material';

import '../App.css'

function Signin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

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
          <h1>Sign in with your account</h1>
          <form>
            
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

            <Button 
              variant="contained"
              fullWidth
              type="submit"
              color="info"
            >Sign In</Button>
          </form>
        </div>
        </div>
    </div>
  )
}

export default Signin
