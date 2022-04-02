import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Header from '../components/header/Header'

function Dashboard() {

  const navigate = useNavigate()
  const { user } = useSelector(state => state.auth)
  
  useEffect(() => {
    if (!user) {
      navigate('/signin')
    }
  }, [user, navigate])

  return (
    <div>
      <Header />
      Dashboard
    </div>
  )
}

export default Dashboard
