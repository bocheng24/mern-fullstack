const colors = require('colors')
const express = require('express')
const dotenv = require('dotenv').config()

const { errHandler } = require('./middleware/errMiddleware')
const { connectDB } = require('./config/db')

const PORT = process.env.PORT || 4500

connectDB()

const app = express()

// Handle request body
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use(errHandler)

app.listen(PORT, () => console.log('server side is running:', PORT))