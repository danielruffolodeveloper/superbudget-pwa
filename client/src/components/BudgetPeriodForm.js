import React from 'react'
import { Form, Button } from 'react-bootstrap';


const BudgetPeriodForm = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBudgetStart">
                <Form.Control type="date" placeholder="Start Date" />
                <Form.Text className="text-muted">
                    Budget Start Date
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBudgetEnd">
                <Form.Control type="date" placeholder="End Date" />
                <Form.Text className="text-muted">
                    Budget End Date
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Set Period
            </Button>
        </Form>
    )
}

export default BudgetPeriodForm