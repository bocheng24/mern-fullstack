const express = require('express')

const { getGoals,
     postGoal,
     updateGoal,
     delGoal 
} = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

// router.get('/', getGoals)
// router.post('/', postGoal)
router.route('/').get(protect, getGoals).post(protect, postGoal)

// router.put('/:id', updateGoal)
// router.delete('/:id', delGoal)
router.route('/:id').put(protect, updateGoal).delete(protect, delGoal)

module.exports = router