const asyncHandler = require('express-async-handler')

const Budget = require('../models/budgetModel')
const User = require('../models/userModel')

// @desc    Get getBudget
// @route   GET /api/budget/:id
// @access  Private
const getBudget = asyncHandler(async (req, res) => {
  const budgets = await Budget.find({ user: req.user.id })

  res.status(200).json(goals)
})

module.exports = {
  getBudget
}