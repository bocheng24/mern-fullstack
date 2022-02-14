const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200)
       .json({
            message: 'goals get'
       })
})

router.post('/', (req, res) => {
    res.status(200)
       .json({
            message: 'goals post'
       })
})

router.put('/:id', (req, res) => {
    res.status(200)
       .json({
            message: `goals updated for ${req.params.id}`
       })
})

router.delete('/:id', (req, res) => {
    res.status(200)
       .json({
            message: `goals delete for ${req.params.id}`
       })
})

module.exports = router