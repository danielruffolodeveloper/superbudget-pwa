import { Form, Modal, Button } from "react-bootstrap"
import { v4 as uuidV4 } from "uuid"

import { useRef } from "react"
import { useBudgets } from "../contexts/BudgetsContext"

const BudgetPeriod = ({ budgetMonth, setBudgetMonth }) => {

    const budgetMonthRef = useRef()
    const { createBudget } = useBudgets()

    function handleSubmit(e) {
        e.preventDefault()
        createBudget({
            id: uuidV4(),
            budgetDate: Date.now(),
            budgetMonth: budgetMonthRef.current.value,
            budgetIncomes: [],
            budgetExpenses: [],
            netIncomes: 0,
            netExpenses: 0,
            netBudget: 0,
            totalSaved: 0
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBudgetMonth">
                <Form.Control as="select" ref={budgetMonthRef}
                    onChange={handleSubmit}
                >
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                </Form.Control>
                <Form.Text className="text-muted">
                    Set Budget Month
                </Form.Text>
            </Form.Group>

        </Form>
    )
}

export default BudgetPeriod