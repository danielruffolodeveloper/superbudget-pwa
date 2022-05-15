import React from 'react'
import { ListGroup, Badge } from 'react-bootstrap';
import { useBudgets } from "../contexts/BudgetsContext"

const IncomeList = () => {
    const { selectedBudget } = useBudgets()

    const formatCurrency = (amount) => {
        return amount.toLocaleString('en-AU', { style: 'currency', currency: 'AUD' });
    }

    return (
        <ListGroup className="mt-4">
            {selectedBudget.incomes.map(income => (
                <ListGroup.Item
                    key={income.id}
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        {income.incomeType}
                    </div>
                    <Badge bg="primary" pill>
                        {formatCurrency(parseInt(income.amount))}
                    </Badge>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default IncomeList