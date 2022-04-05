import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress';
import { getAllGoals, reset } from '../features/goals/goalSlice';

import Header from '../components/header/Header'
import GoalForm from '../components/goalForm/GoalForm'
import GoalCard from '../components/goalCard/GoalCard';

function Dashboard() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector(state => state.auth)
  const { goals, isLoading, isSuccess, isError, message } = useSelector(state => state.goal)

  
  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/signin')
    }

    dispatch(getAllGoals())

    return () => {
      dispatch(reset())
    }

  }, [user, navigate, isError, message, dispatch])

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
      <section>
        <div className="container">
          {user && <h1>Welcome {user.username}!</h1>}
          <h3>Goals Dashboard</h3>
          <GoalForm />
          { console.log(goals) }
          <div className="goals-cards">
            {
              goals.length > 0 ? (
                goals.map(goal => <GoalCard key={goal._id} 
                                            text={ goal.text } 
                                            createdAt={ goal.createdAt } 
                                            updatedAt={ goal.updatedAt } 
                                            id={goal._id}
                                  />)
              ) : (<h3>You haven't set any goal</h3>)
            }
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Dashboard
