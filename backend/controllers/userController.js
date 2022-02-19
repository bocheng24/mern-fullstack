const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')


const genToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

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
            email: user.email,
            token: genToken(user.id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }


})

const signinUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body

    const user = await User.findOne({ email })
    const passwordMatch = await bcrypt.compare(password, user.password)

    if (user && passwordMatch) {

        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: genToken(user.id)
        })

    } else if (user && !passwordMatch) {
        
        res.status(400)
        throw new Error('Invalid password')

    } else {
        
        res.status(400)
        throw new Error('User not found')

    }

})

const getMe = asyncHandler(async (req, res) => {
    const { _id, username, email } = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        username: username,
        email: email
    })
})


module.exports = {
    signupUser,
    signinUser,
    getMe
}