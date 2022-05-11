import React from 'react'
import { Form, Button } from 'react-bootstrap';

const BudgetPeriod = () => {
  return (
    <Form>
            <Form.Group className="mb-3" controlId="formBudgetMonth">
                <Form.Control as="select">
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