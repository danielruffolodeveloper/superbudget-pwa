import React from 'react'
import { Form } from 'react-bootstrap';
import { useBudgets } from "../contexts/BudgetsContext"

const BudgetPeriodDropdown = () => {
    const { handleSeedBudgets, handleGetBudgets, handleGetSelectedBudget, selectedBudget } = useBudgets()
    const budgets = handleGetBudgets()

    const formatCurrency = (amount) => {
        return amount.toLocaleString('en-AU', { style: 'currency', currency: 'AUD' });
    }

    return (
        <>
            <Form.Select
                className="mb-2"
                onChange={(e) => {
                    handleGetSelectedBudget(e.target.value)
                }}>
                {budgets.map(budget => (
                    <option value={budget.id}>{budget.month} ({formatCurrency(budget.incomes.reduce((acc, curr) => {
                        return acc + parseInt(curr.amount)
                    }, 0) - budget.expenses.reduce((acc, curr) => {
                        return acc + parseInt(curr.amount)
                    }, 0))})</option>
                ))}
            </Form.Select>
        </>
    )
}

export default BudgetPeriodDropdown