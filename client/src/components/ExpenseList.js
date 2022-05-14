import React from 'react'
import { ListGroup, Badge } from 'react-bootstrap';

const ExpenseList = ({ budgetExpenses }) => {
    return (
        <ListGroup className="mt-4">
            {budgetExpenses.map(expense => (
                <ListGroup.Item
                    key={expense.id}
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        {expense.expenseType}
                    </div>
                    <Badge bg="primary" pill>
                        {expense.amount}
                    </Badge>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default ExpenseList