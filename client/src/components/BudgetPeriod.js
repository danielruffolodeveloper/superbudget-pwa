import { Button, ListGroup, Badge } from "react-bootstrap"
import { useRef } from "react"
import { useBudgets } from "../contexts/BudgetsContext"

const BudgetPeriod = () => {
    const { handleSeedBudgets, handleGetBudgets, handleGetSelectedBudget, selectedBudget } = useBudgets()
    const budgets = handleGetBudgets()

    const formatCurrency = (amount) => {
        return amount.toLocaleString('en-AU', { style: 'currency', currency: 'AUD' });
    }

    return (
        <>
            <h6>Set budget month</h6>
            <ListGroup>
                {budgets.map(budget => (
                    <ListGroup.Item key={budget.id}
                        as="li"
                        active={selectedBudget.id === budget.id}
                        onClick={() => {
                            handleGetSelectedBudget(budget.id)
                        }}
                        className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{budget.month}</div>
                        </div>
                        <Badge bg="light" text="dark" pill>
                            {formatCurrency(budget.incomes.reduce((acc, curr) => {
                                return acc + parseInt(curr.amount)
                            }, 0) - budget.expenses.reduce((acc, curr) => {
                                return acc + parseInt(curr.amount)
                            }, 0))}
                        </Badge>
                    </ListGroup.Item>
                ))}
            </ListGroup>    
        </>
    )
}

export default BudgetPeriod