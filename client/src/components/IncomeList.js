import { useState } from 'react'
import { ListGroup, Badge, Button, Modal, Stack } from 'react-bootstrap';
import { useBudgets } from "../contexts/BudgetsContext"
import IncomeModal from './IncomeModal';

const IncomeList = () => {
    const { selectedBudget, handleSetEditIncomeMode, editIncome, handleShowIncomesModal } = useBudgets()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const formatCurrency = (amount) => {
        return amount.toLocaleString('en-AU', { style: 'currency', currency: 'AUD' });
    }

    return (
        <>
            <Stack direction="horizontal" gap={3}>
                <h6>Set Incomes</h6>
                <div className='ms-auto mb-2'>
                <IncomeModal/>
                </div>
                 
            </Stack>
            <ListGroup>
                {selectedBudget?.incomes?.map(income => (
                    <ListGroup.Item
                        onClick={() => {
                            handleSetEditIncomeMode(income)
                            handleShowIncomesModal()
                        }}
                        key={income.id}
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        active={income.id === editIncome.id}
                    >
                        <div className="ms-2 me-auto">
                            {income.incomeType}
                        </div>
                        <Badge bg="primary" pill>
                            {formatCurrency(parseInt(income.amount))}
                        </Badge>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </>
    )
}

export default IncomeList