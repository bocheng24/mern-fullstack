const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: [true, 'Please type your username'],
        unique
    },

    email: {
        type: String,
        require: [true, 'Please type your email address'],
        unique
    },

    password: {
        type: String,
        require: [true, 'Please type your password']
    }
}, {
    timestamp: true
})

module.exports = mongoose.model('User', userSchema)