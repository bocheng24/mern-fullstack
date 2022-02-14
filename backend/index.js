const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4500

const app = express()
app.listen(PORT, () => console.log('server side is running:', PORT))