const express = require('express')
const { 
    signupUser,
    signinUser,
    getMe 
} = require('../controllers/userController')

const router = express.Router()

router.post('/', signupUser)
router.post('/signin', signinUser)
router.get('/me', getMe)

module.exports = router