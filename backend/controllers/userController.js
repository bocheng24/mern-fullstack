const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')

const signupUser = asyncHandler(async (req, res) => {
    
    if (!req.body.username) {
        res.status(400)
        throw new Error('Username is empty')
    }

    const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    res.status(200).json(user)

})

const signinUser = asyncHandler(async (req, res) => {
    res.json({message: "sign in"})
})

const getMe = asyncHandler(async (req, res) => {
    res.json({message: "Get me"})
})


module.exports = {
    signupUser,
    signinUser,
    getMe
}