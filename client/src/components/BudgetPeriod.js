import { Button, ListGroup } from "react-bootstrap"
import { useRef } from "react"
import { useBudgets } from "../contexts/BudgetsContext"

const BudgetPeriod = () => {
    const { handleSeedBudgets, handleGetBudgets, handleGetSelectedBudget, selectedBudget } = useBudgets()
    const budgets = handleGetBudgets()
    return (
        <>
            <ListGroup>
                {budgets.map(budget => (
                    <ListGroup.Item key={budget.id}
                        as="li" active={selectedBudget.id === budget.id}
                        onClick={() => {
                            handleGetSelectedBudget(budget.id)
                        }}
                    >
                        {budget.month}
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <ListGroup className="mt-3">
                <Button variant="primary" onClick={() => handleSeedBudgets()}>
                    Seed Budgets
                </Button>
            </ListGroup>
        </>
    )
}

export default BudgetPeriod