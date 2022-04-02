import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import Header from '../components/header/Header'
import { TextField, Button } from '@mui/material';
import { register, reset } from '../features/auth/authSlice';
import CircularProgress from '@mui/material/CircularProgress';

import '../App.css'

function Signup() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confPassword: ''
  })

  const { username, email, password, confPassword } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if(isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])

  const handleOnChange = e => {
    setFormData(prev => ({

      ...prev,
      [e.target.name]: e.target.value

    }))
  }

  const handleOnSubmit = e => {
    e.preventDefault()

    if ( password !== confPassword ) {
      
      toast.error('Passwords do not match')

    } else {
      
      const userData = {
        username,
        email,
        password
      }

      dispatch(register(userData))

    }
  }

  if (isLoading) {
    return (
      
      <div style={ {display: 'flex', justifyContent: 'center', alignItems: 'center'} }>
        <CircularProgress />
      </div>

    )
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="form__container">
          <h1>Sign up an account</h1>
          <form onSubmit={ handleOnSubmit }>
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
