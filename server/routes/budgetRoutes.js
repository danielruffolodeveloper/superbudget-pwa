const express = require('express')
const router = express.Router()
const {
  getBudget,
} = require('../controllers/budgetController')

const { protect } = require('../middleware/authMiddleware')

router.route('/:id').get(protect, getBudget)

module.exports = router