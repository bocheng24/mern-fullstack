const colors = require('colors')
const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')

const { errHandler } = require('./middleware/errMiddleware')
const { connectDB } = require('./config/db')

const PORT = process.env.PORT || 4500

connectDB()

const app = express()
app.use(cors())
// Handle request body
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errHandler)

app.listen(PORT, () => console.log('server side is running:', PORT))