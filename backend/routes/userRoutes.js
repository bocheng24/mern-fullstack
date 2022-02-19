const express = require('express')
const { 
    signupUser,
    signinUser,
    getMe 
} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/', signupUser)
router.post('/signin', signinUser)
router.get('/me', protect, getMe)

module.exports = router