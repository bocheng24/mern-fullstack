const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')

const signupUser = asyncHandler(async (req, res) => {
    
    const { username, email, password } = req.body

    // check if all fields are fulfilled
    if (!username || !email || !password) {

        const usernameErr = username ? '' : 'username '
        const emailErr = email ? '' : 'email '
        const passwordErr = password ? '' : 'password '

        res.status(400)
        throw new Error(`Please fill ${usernameErr}${emailErr}${passwordErr}field(s)`)
    }

    // check if the user has been signed up
    const usernameExists = await User.findOne({ username })
    const emailExists = await User.findOne({ email })

    if (usernameExists || emailExists) {
        const message = `${ usernameExists ? 'username ' : '' }${ emailExists ? 'email ': '' }already signed up`
        res.status(400)
        throw new Error(message)
    }

    // Gen hash password and add user
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        username: username,
        email: email,
        password: hashPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }


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