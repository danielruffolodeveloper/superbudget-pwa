import { useState } from 'react'
import { Form, Button } from 'react-bootstrap';

const IncomeForm = ({setBudgetIncomes,budgetIncomes}) => {

    const [income, setIncome] = useState({
        id: Math.floor(Math.random() * 100),
        incomeType: '',
        amount: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setBudgetIncomes([...budgetIncomes, income])
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formIncomeType" className="mb-3">
                <Form.Control as="select"
                    value={income.incomeType}
                    onChange={(e) => setIncome({ ...income, incomeType: e.target.value })}>
                    <option>Select Income Type</option>
                    <option>Wage</option>
                    <option>Freelancing</option>
                    <option>Investment</option>
                    <option>Sold Goods</option>
                    <option>Other</option>
                </Form.Control>
                <Form.Text className="text-muted">
                    Set Income Type
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formIncomeAmount" className="mb-3">
                <Form.Control
                    type="number"
                    placeholder="Amount"
                    value={income.amount}
                    onChange={(e) => setIncome({ ...income, amount: e.target.value })}
                />
               
            </Form.Group>

            <Button variant="primary" type="submit">
                Add Income
            </Button>
        </Form>

    )
}

export default IncomeForm