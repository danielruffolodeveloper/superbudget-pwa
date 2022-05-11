import React from 'react'
import { Form, Button } from 'react-bootstrap';

const IncomeForm = () => {
    return (

        <Form>
            <Form.Group className="mb-3" controlId="formIncomeName">
                <Form.Control type="text" placeholder="Enter Income Name" />
                <Form.Text className="text-muted">
                    Enter Income, e.g. Salary, Bonus, etc.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formIncomeAmount">
                <Form.Control type="number" placeholder="Amount" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add Income
            </Button>
        </Form>

    )
}

export default IncomeForm