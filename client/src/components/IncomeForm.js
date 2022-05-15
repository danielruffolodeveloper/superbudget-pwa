import { useState,useRef } from 'react'
import { useBudgets } from "../contexts/BudgetsContext"
import { ListGroup, Form, Button } from 'react-bootstrap';
import { v4 as uuidV4 } from "uuid"


const IncomeForm = () => {
    const {handleUpdateSelectedBudgetIncomes } = useBudgets()
    const incomeTypeRef = useRef()
    const amountRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        const income = {
            id: uuidV4(),
            incomeType: incomeTypeRef.current.value,
            amount: amountRef.current.value,
        }
        handleUpdateSelectedBudgetIncomes(income)
        incomeTypeRef.current.value = ''
        amountRef.current.value = ''
        
    }
        return (
            <Form onSubmit={handleSubmit}>
                <ListGroup className='mt-3'>
                    <ListGroup.Item>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <h6>Add Income</h6>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Select ref={incomeTypeRef}>
                                <option>Select</option>
                                <option>Wage</option>
                                <option>Bonus</option>
                                <option>Other</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="number" placeholder="Amount" ref={amountRef} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Button variant="outline-primary" type="submit">
                                Add
                            </Button>
                        </Form.Group>
                    </ListGroup.Item>
                </ListGroup>
            </Form>
        )
    }

    export default IncomeForm