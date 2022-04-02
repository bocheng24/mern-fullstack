import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { useSelector, useDispatch } from 'react-redux';
import { signout, reset } from '../../features/auth/authSlice';
import { Button } from '@mui/material'

import './Header.css'

function Header() {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector( state => state.auth )

  const onSignOut = () => {
      console.log('sign out')
      dispatch(signout())
      dispatch(reset())
      navigate('/signin')
  }
  
  return (
    <div className="header">
        <div className="header__container">  
            <div className="header__left">
                <Link to="/" className="header__link">
                    Goal Maker
                </Link>
            </div>  
            <div className="header__right">
                { user ? 
                    (
                    <Button style={ {"color": "#fff", "fontWeight": "bold"} } 
                            startIcon={<LogoutIcon className="header__icon" />} 
                            className="header__link" to="/signin"
                            onClick={ onSignOut }
                    >    
                        Sign out
                    </Button>
                    ) 
                    : 
                    (
                    <> 
                        <Link className="header__link" to="/signin">
                            <LoginIcon className="header__icon" />
                            Sign in
                        </Link>
                        <Link className="header__link" to="/signup">
                            <PersonAddAltIcon className="header__icon" />
                            Sign up
                        </Link>
                    </>
                    )
                
                }
               
            </div>
        </div>
    </div>
  )
}

export default Header