const express = require('express')
const router = express.Router()
const {
    getBudgets,
} = require('../controllers/budgetController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getBudgets)

module.exports = router