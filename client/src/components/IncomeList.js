import React from 'react'
import { ListGroup, Badge } from 'react-bootstrap';

const IncomeList = () => {
    return (
        <>
            <ListGroup className="mt-4">
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Wage (Monthly)</div>
                        
                    </div>
                    <Badge bg="primary" pill>
                        $2000
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Freelancing</div>
                        
                    </div>
                    <Badge bg="primary" pill>
                        $500
                    </Badge>
                </ListGroup.Item>
                
              
            </ListGroup>
        </>


    )
}

export default IncomeList