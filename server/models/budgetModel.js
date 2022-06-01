const mongoose = require('mongoose')

const incomesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
})

const expensesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
})


const budgetSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    budgetName: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    description: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    incomes: [incomesSchema],
    expenses: [expensesSchema],
    startDate: {
      type: Date,
      required: [true, 'Please add a date value'],
    },
    endDate: {
      type: Date,
      required: [true, 'Please add a date value'],
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Budget', budgetSchema)