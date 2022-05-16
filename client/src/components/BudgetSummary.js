import React from 'react'
import { ListGroup, Badge } from 'react-bootstrap';
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
      <h6>Summary</h6>
      <ListGroup>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div>Net Income</div>
          </div>
          <Badge bg="primary" pill>
            {formatCurrency(totalIncome)}
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div>Net Expenses</div>
          </div>
          <Badge bg="primary" pill>
            {formatCurrency(totalExpenses)}
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div>Total Saved</div>
          </div>
          <Badge bg="primary" pill>
            {formatCurrency(totalSaved)}
          </Badge>
        </ListGroup.Item>
      </ListGroup>
    </>

  )
}

export default BudgetSummary