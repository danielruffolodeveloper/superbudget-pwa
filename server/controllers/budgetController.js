
   
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

// @desc    Create new budget
// @route   POST /api/budgets
// @access  Private

const createBudget = asyncHandler(async (req, res) => {
  const { name, description, startDate, endDate } = req.body

  const budget = await Budget.create({
    name,
    description,
    startDate,
    endDate,
    incomes: [
      {
        name: 'Income',
        amount: 0,
        date: new Date()
      }
    ],
    expenses: [
      {
        name: 'Expense',
        amount: 0,
        date: new Date()
      }
    ],
    user: req.user.id,
  })

  res.status(201).json(budget)
}
)




module.exports = {
  getBudgets,
  createBudget
}