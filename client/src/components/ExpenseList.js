import React from 'react'
import { ListGroup, Badge } from 'react-bootstrap';
import { useBudgets } from "../contexts/BudgetsContext"

const ExpenseList = () => {
    const { selectedBudget, handleSetEditExpenseMode, editExpense } = useBudgets()

    const formatCurrency = (amount) => {
        return amount.toLocaleString('en-AU', { style: 'currency', currency: 'AUD' });
    }

    return (
        <ListGroup className="mt-4">
            {selectedBudget?.expenses?.map(expense => (
                <ListGroup.Item
                    onClick={() => handleSetEditExpenseMode(expense)}
                    key={expense.id}
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                    active={expense.id === editExpense.id}
                >
                    <div className="ms-2 me-auto">
                        {expense.expenseType}
                    </div>
                    <Badge bg="primary" pill>
                        {formatCurrency(parseInt(expense.amount))}
                    </Badge>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default ExpenseList