import React from 'react'
import { ListGroup, Badge } from 'react-bootstrap';
import { useBudgets } from "../contexts/BudgetsContext"

const ExpenseList = () => {
    const { selectedBudget } = useBudgets()

    const formatCurrency = (amount) => {
        return amount.toLocaleString('en-AU', { style: 'currency', currency: 'AUD' });
    }

    return (
        <ListGroup className="mt-4">
            {selectedBudget.expenses.map(expense => (
                <ListGroup.Item
                    key={expense.id}
                    as="li"
                    className="d-flex justify-content-between align-items-start"
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