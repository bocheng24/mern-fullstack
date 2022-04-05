import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


import Header from '../components/header/Header'
import GoalForm from '../components/goalForm/GoalForm'

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
      <section>
        <div className="container">
          {user && <h1>Welcome {user.username}!</h1>}
          <h3>Goals Dashboard</h3>
          <GoalForm />
        </div>
      </section>
    </div>
  )
}

export default Dashboard
