const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
    {
        user: {
            ref: 'User',
            type: mongoose.Schema.Types.ObjectId,
            require
        },

        text: {
            type: String,
            require: [true, 'Please add a goal']
        }
    }, {
        timestamps: true
    }
)

module.exports = mongoose.model('Goal', goalSchema)
