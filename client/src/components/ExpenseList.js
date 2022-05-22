import React from 'react'
import { ListGroup, Badge, Stack, Button } from 'react-bootstrap';
import { useBudgets } from "../contexts/BudgetsContext"
import ExpenseModal from './ExpenseModal';

const ExpenseList = () => {
    const { selectedBudget, handleSetEditExpenseMode, editExpense, handleShowExpensesModal } = useBudgets()

    const formatCurrency = (amount) => {
        return amount.toLocaleString('en-AU', { style: 'currency', currency: 'AUD' });
    }

    return (
        <>
            <Stack direction="horizontal" gap={3}>
                <h6>Set Expenses</h6>
                <div className='ms-auto mb-2'>
                    <ExpenseModal />
                </div>
            </Stack>

            {/* if expenses legth < 1  */}
            {selectedBudget.expenses.length < 1 && (
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div>No expenses set</div>
                    </div>
                </ListGroup.Item>
            )}

            <ListGroup>
                {selectedBudget?.expenses?.map(expense => (
                    <ListGroup.Item
                        onClick={() => {
                            handleSetEditExpenseMode(expense)
                            handleShowExpensesModal()
                        }
                        }
                        key={expense.id}
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        active={expense.id === editExpense.id}
                    >
                        <div className="ms-2 me-auto">
                            {expense.expenseType}
                        </div>
                        <Badge bg="primary" pill>
                            {formatCurrency(parseInt(expense.amount))}
                        </Badge>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </>

    )
}

export default ExpenseList