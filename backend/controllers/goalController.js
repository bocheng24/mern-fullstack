const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')

const getGoals = asyncHandler(async (req, res) => {

    const goals = await Goal.find()
    res.status(200).json(goals)
})

const postGoal = asyncHandler(async (req, res) => {

    if (!req.body.text) {
        res.status(400)
        throw new Error('Please fill text in the field')

    } else {

        const goal = await Goal.create({ text: req.body.text })

        res.status(200).json(goal)

    }

})

const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `update goal: ${req.params.id}`
    })
})

const delGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Delete goal: ${req.params.id}`
    })
})

module.exports = {
    getGoals,
    postGoal,
    updateGoal,
    delGoal
}