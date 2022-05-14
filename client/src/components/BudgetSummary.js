import React from 'react'

const BudgetSummary = ({ totalIncome, totalExpesnes, totalSaved }) => {

  // format currency to 2 decimal places Australian
  const formatCurrency = (amount) => {
    return amount.toLocaleString('en-AU', { style: 'currency', currency: 'AUD' });
  }


  return (
    <>
      <h5>Net Income: {formatCurrency(totalIncome)}</h5>
      <h5>Net Expenses: {formatCurrency(totalExpesnes)}</h5>
      <h5>Total Saved: {formatCurrency(totalSaved)}</h5>
    </>
  )
}

export default BudgetSummary