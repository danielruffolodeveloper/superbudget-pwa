import { useState, useRef, useEffect } from 'react'
import { useBudgets } from "../contexts/BudgetsContext"
import { ListGroup, Form, Button } from 'react-bootstrap';
import { v4 as uuidV4 } from "uuid"


const ExpenseForm = () => {
    const { handleUpdateSelectedBudgetExpenses, handleUpdateSelectedBudgetExpense, editExpenseMode, editExpense, setEditExpenseMode, removeExpense,clearSelectedExpense } = useBudgets()
    const expenseTypeRef = useRef()
    const amountRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();

        const expense = {
            id: uuidV4(),
            expenseType: expenseTypeRef.current.value,
            amount: amountRef.current.value,
        }

        if (editExpenseMode) {
            handleUpdateSelectedBudgetExpense(expense)
        } else {
            handleUpdateSelectedBudgetExpenses(expense)
        }
    }

    useEffect(() => {
        if (editExpenseMode) {
            expenseTypeRef.current.value = editExpense.expenseType
            amountRef.current.value = editExpense.amount
        } else {
            expenseTypeRef.current.value = ''
            amountRef.current.value = ''
        }

    }, [editExpenseMode, editExpense])

 

    return (
        <Form onSubmit={handleSubmit}>
            <ListGroup className='mt-3'>
                <ListGroup.Item>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{editExpenseMode ? 'Edit Expense' : 'Add Expense'}</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Select ref={expenseTypeRef}>
                            <option>Rent</option>
                            <option>Shopping</option>
                            <option>Food</option>
                            <option>Transport</option>
                            <option>Utilities</option>
                            <option>Insurance</option>
                            <option>Health</option>
                            <option>Clothing</option>
                            <option>Entertainment</option>
                            <option>Debt</option>
                            <option>Other</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="number" placeholder="Amount" ref={amountRef} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Button variant="outline-primary" type="submit">
                            {editExpenseMode ? 'Update' : 'Add'}
                        </Button>
                        {/* if editmode */}
                        {editExpenseMode &&
                        <Button variant="outline-danger"
                            onClick={() => {
                                removeExpense(editExpense.id)
                            }}>
                            Remove
                        </Button>
                        }
                        <Button variant="outline-secondary"
                            onClick={() => {
                                clearSelectedExpense()
                            }}>
                            Cancel
                        </Button>
                    </Form.Group>
                </ListGroup.Item>
            </ListGroup>
        </Form>
    )
}

export default ExpenseForm