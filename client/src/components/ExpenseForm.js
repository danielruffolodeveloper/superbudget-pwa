import { useState } from 'react'
import { Form, Button } from 'react-bootstrap';

const ExpenseForm = ({ setBudgetExpenses, budgetExpenses }) => {

    const [expense, setExpense] = useState({
        id: Math.floor(Math.random() * 100),
        expenseType: '',
        amount: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setBudgetExpenses([...budgetExpenses, expense])
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formExpenseType" className="mb-3">
                <Form.Control as="select"
                    value={expense.expenseType}
                    onChange={(e) => setExpense({ ...expense, expenseType: e.target.value })}>
                    <option>Select Expense Type</option>
                    <option>Fuel</option>
                    <option>Food</option>
                    <option>Bills</option>
                    <option>Rates</option>
                    <option>Other</option>
                </Form.Control>
                <Form.Text className="text-muted">
                    Set Expense Type
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formExpenseAmount" className="mb-3">
                <Form.Control
                    type="number"
                    placeholder="Amount"
                    value={expense.amount}
                    onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
                />

            </Form.Group>

            <Button variant="primary" type="submit">
                Add Expense
            </Button>
        </Form>
    )
}

export default ExpenseForm