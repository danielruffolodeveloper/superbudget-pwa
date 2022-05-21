import { Modal, Button } from 'react-bootstrap';
import IncomeForm from './IncomeForm'
import { useBudgets } from "../contexts/BudgetsContext"

const IncomeModal = () => {
    const { showIncomeModal,handleShowIncomesModal } = useBudgets()
    const handleClose = () => handleShowIncomesModal();
    const handleShow = () => handleShowIncomesModal();
  return (
     <>
      <Button variant="light"  size="sm" onClick={handleShow}>
        Add Income
      </Button>

      <Modal show={showIncomeModal} onHide={handleClose}>
        <Modal.Body>
            <IncomeForm closeModal={handleClose}/>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default IncomeModal