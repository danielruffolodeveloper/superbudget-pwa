import React from 'react'
import { ListGroup, Badge } from 'react-bootstrap';

const ExpenseList = () => {
    return (
        <>
            <ListGroup className="mt-4">
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Fuel</div>
                        
                    </div>
                    <Badge bg="primary" pill>
                        $100
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Shopping</div>
                        
                    </div>
                    <Badge bg="primary" pill>
                        $300
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Back To School</div>
                        
                    </div>
                    <Badge bg="primary" pill>
                        $500
                    </Badge>
                </ListGroup.Item>
              
            </ListGroup>
        </>


    )
}

export default ExpenseList