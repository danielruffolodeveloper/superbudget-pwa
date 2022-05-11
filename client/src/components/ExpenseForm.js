import React from 'react'
import { Form, Button } from 'react-bootstrap';

const ExpenseForm = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formExpenseName">
                <Form.Control type="text" placeholder="Enter Expense Name" />
                <Form.Text className="text-muted">
                    Enter Expense, e.g. Bills, Shopping, etc.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formExpenseAmount">
                <Form.Control type="number" placeholder="Amount" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add Expense
            </Button>
        </Form>
    )
}

export default ExpenseForm