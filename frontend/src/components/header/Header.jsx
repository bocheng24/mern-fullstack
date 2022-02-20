import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

import './Header.css'

function Header() {
  return (
    <div className="header">
        <div className="header__container">    
            <div className="header__left">
                Goal Maker
            </div>
            <div className="header__right">
                <div>
                    <LoginIcon className="header__icon" />
                    Sign in
                </div>
                <div>
                    <PersonAddAltIcon className="header__icon" />
                    Sign up
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header