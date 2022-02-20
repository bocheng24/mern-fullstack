import React from 'react'
import { Link } from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

import './Header.css'

function Header() {
  return (
    <div className="header">
        <div className="header__container">  
            <div className="header__left">
                <Link to="/" className="header__link">
                    Goal Maker
                </Link>
            </div>  
            <div className="header__right">
                <Link className="header__link" to="/signin">
                    <LoginIcon className="header__icon" />
                    Sign in
                </Link>
                <Link className="header__link" to="/signup">
                    <PersonAddAltIcon className="header__icon" />
                    Sign up
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header