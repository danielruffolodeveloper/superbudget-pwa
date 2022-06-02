
   
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
  const { budgetName, description, startDate, endDate } = req.body

  const budget = await Budget.create({
    budgetName,
    description,
    startDate: new Date(),
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
})

// @desc    Update Budget
// @route   PUT /api/budgets/:id
// @access  Private
const updateBudget = asyncHandler(async (req, res) => {
  const budget = await Budget.findById(req.params.id)

  if (!budget) {
    res.status(400)
    throw new Error('Budget not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the budget user
  if (budget.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedBudget = await Budget.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedBudget)
})


// @desc    Delete Budget
// @route   DELETE /api/budgets/:id
// @access  Private
const deleteBudget = asyncHandler(async (req, res) => {
  const budget = await Budget.findById(req.params.id)

  if (!budget) {
    res.status(400)
    throw new Error('Budget not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in budget matches the budget user
  if (budget.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await budget.remove()

  res.status(200).json({ id: req.params.id })
})


module.exports = {
  getBudgets,
  createBudget,
  updateBudget,
  deleteBudget
}