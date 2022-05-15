import { Form, Modal, Button } from "react-bootstrap"
import { v4 as uuidV4 } from "uuid"

import { useRef } from "react"
import { useBudgets } from "../contexts/BudgetsContext"

const BudgetPeriod = () => {

    const budgetMonthRef = useRef()
    const { handleSeedBudgets } = useBudgets()



    return (
        <>
            <Button variant="primary" onClick={() => handleSeedBudgets()}>
                Seed Budgets
            </Button>
        </>
    )
}

export default BudgetPeriod