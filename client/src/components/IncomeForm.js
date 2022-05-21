import { useState, useRef, useEffect } from 'react'
import { useBudgets } from "../contexts/BudgetsContext"
import { ListGroup, Form, Button } from 'react-bootstrap';
import { v4 as uuidV4 } from "uuid"


const IncomeForm = ({closeModal}) => {
    const { handleUpdateSelectedBudgetIncomes, handleUpdateSelectedBudgetIncome, editIncomeMode, editIncome,removeIncome,clearSelectedIncome } = useBudgets()
    const incomeTypeRef = useRef()
    const amountRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();

        const income = {
            id: uuidV4(),
            incomeType: incomeTypeRef.current.value,
            amount: amountRef.current.value,
        }

        if (editIncomeMode) {
            handleUpdateSelectedBudgetIncome(income)
        } else {
            handleUpdateSelectedBudgetIncomes(income)
        }
        closeModal()
    }

    useEffect(() => {
        if (editIncomeMode) {
            incomeTypeRef.current.value = editIncome.incomeType
            amountRef.current.value = editIncome.amount
        } else {
            incomeTypeRef.current.value = ''
            amountRef.current.value = ''
        }

    }, [editIncomeMode, editIncome])

    return (
        <Form onSubmit={handleSubmit}>
            <ListGroup className='mt-3'>
                <ListGroup.Item>
                    <Form.Group className="mb-3">
                        <Form.Label>{editIncomeMode ? 'Edit Income' : 'Add Income'}</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formIncome">
                        <Form.Select ref={incomeTypeRef}>
                            <option>Wage</option>
                            <option>Bonus</option>
                            <option>Freelancing</option>
                            <option>Other</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formIncomeAmmoung">
                        <Form.Control type="number" placeholder="Amount" ref={amountRef} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Button variant="outline-primary" type="submit">
                            {editIncomeMode ? 'Update' : 'Add'}
                        </Button>
                        {/* if editmode */}
                        {editIncomeMode &&
                        <Button variant="outline-danger"
                            onClick={() => {
                                removeIncome(editIncome.id)
                            }}>
                            Remove
                        </Button>
                        }
                        <Button variant="outline-secondary"
                            onClick={() => {
                                clearSelectedIncome()
                                closeModal()
                            }}>
                            Cancel
                        </Button>
                    </Form.Group>
                </ListGroup.Item>
            </ListGroup>
        </Form>
    )
}

export default IncomeForm