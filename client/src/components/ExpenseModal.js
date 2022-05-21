import { Modal, Button } from 'react-bootstrap';
import ExpenseForm from './ExpenseForm' 
import { useBudgets } from "../contexts/BudgetsContext"


const ExpenseModal = () => {
    const { showExpenseModal,handleShowExpensesModal } = useBudgets()
    const handleClose = () => handleShowExpensesModal();
    const handleShow = () => handleShowExpensesModal();
  return (
     <>
      <Button  variant="light"  size="sm" onClick={handleShow}>
        Add Expense
      </Button>

      <Modal show={showExpenseModal} onHide={handleClose}>
        <Modal.Body>
            <ExpenseForm closeModal={handleClose}/>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ExpenseModal