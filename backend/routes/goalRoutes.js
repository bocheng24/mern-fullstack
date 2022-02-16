const express = require('express')

const { getGoals,
     postGoal,
     updateGoal,
     delGoal 
} = require('../controllers/goalController')

const router = express.Router()

// router.get('/', getGoals)
// router.post('/', postGoal)
router.route('/').get(getGoals).post(postGoal)

// router.put('/:id', updateGoal)
// router.delete('/:id', delGoal)
router.route('/:id').put(updateGoal).delete(delGoal)

module.exports = router