import React from 'react'
import { useBudgets } from "../contexts/BudgetsContext"

const BudgetSummary = () => {
  const { selectedBudget } = useBudgets()

  // format currency to 2 decimal places Australian
  const formatCurrency = (amount) => {
    return amount?.toLocaleString('en-AU', { style: 'currency', currency: 'AUD' });
  }

  // calculate total expenses
  const totalExpenses = selectedBudget?.expenses?.reduce((acc, curr) => {
    return acc + parseInt(curr.amount)
  }, 0)

  // calculate total income
  const totalIncome = selectedBudget?.incomes?.reduce((acc, curr) => {
    return acc + parseInt(curr.amount)
  }, 0)

  // calculate total saved
  const totalSaved = totalIncome - totalExpenses
  return (
    <>
      <h5>Net Income: {formatCurrency(totalIncome)}</h5>
      <h5>Net Expenses: {formatCurrency(totalExpenses)}</h5>
      <h5>Total Saved: {formatCurrency(totalSaved)}</h5>
    </>
  )
}

export default BudgetSummary