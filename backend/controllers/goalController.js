const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "GET"
    })
})

const postGoal = asyncHandler(async (req, res) => {

    if (!req.body.text) {
        res.status(400)
        throw new Error('Please fill text in the field')

    } else {

        console.log(req.body.text)

        res.status(200).json({
            message: "POST"
        })

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