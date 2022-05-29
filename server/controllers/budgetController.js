
   
const asyncHandler = require('express-async-handler')

const Budget = require('../models/budgetModel')
const User = require('../models/userModel')

// @desc    Get budgets
// @route   GET /api/budgets
// @access  Private
const getBudgets = asyncHandler(async (req, res) => {
  const budgets = await Budget.find({ user: req.user.id })

  res.status(200).json(budgets)
})


module.exports = {
  getBudgets
}