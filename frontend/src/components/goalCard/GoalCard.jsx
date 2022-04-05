import React from 'react'
import { useDispatch } from 'react-redux'
import { removeGoal } from '../../features/goals/goalSlice';

import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

import './GoalCard.css'

function GoalCard({ text, createdAt, updatedAt, id }) {

    const dispatch = useDispatch()

    return (
    <div className="card">
        <div className="up-row">
            <Button startIcon={ <DeleteIcon color="error"/> } 
                    onClick={() => dispatch(removeGoal(id))}
            />
        </div>
        <div className="mid-row">
            <p>Created At:<br />{ createdAt.slice(0, 10) }</p>
            <p>Last Update:<br />{ updatedAt.slice(0, 10) }</p>
        </div>
        <div className="down-row">
            <h3 className="goal-text">Goal: {text}</h3>
        </div>
    </div>
    )
}

export default GoalCard