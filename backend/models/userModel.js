const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: [true, 'Please type your username'],
        unique: true
    },

    email: {
        type: String,
        require: [true, 'Please type your email address'],
        unique: true
    },

    password: {
        type: String,
        require: [true, 'Please type your password']
    }
}, {
    timestamp: true
})

module.exports = mongoose.model('User', userSchema)