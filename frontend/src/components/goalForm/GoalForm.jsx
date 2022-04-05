import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TextField, Button } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { createGoal } from '../../features/goals/goalSlice'

import './GoalForm.css'

function GoalForm() {

    const [goal, setGoal] = useState('')
    const dispatch = useDispatch()

    const handleOnSubmit = e => {
        e.preventDefault()
        dispatch(createGoal(goal))
        setGoal('')
    }

    return (
    <div style={{ margin: "35px 0" }}>
        <form className="goal-form" onSubmit={ e => handleOnSubmit(e) }>
            <TextField style={{ width: "550px" }}
                        id="goal-text"
                        label="New Goal Here"
                        variant='outlined'
                        value={ goal }
                        onChange={ e => setGoal(e.target.value) } 
            />
            <div className="label-btn">
                <div>
                    <label htmlFor="">Set a new goal, accomplish more</label>
                </div>
                <div>
                    <Button variant='outlined'
                            color="secondary"
                            startIcon={<AddCircleIcon />}
                            size="medium"
                            onClick={ e => handleOnSubmit(e) }
                    >
                        Set
                    </Button>
                </div>
            </div>
        </form>
    </div>
    )
}

export default GoalForm