import React from 'react'
import { ListGroup, Badge } from 'react-bootstrap';

const IncomeList = ({ budgetIncomes }) => {
    console.log(budgetIncomes)
    return (



        <ListGroup className="mt-4">
            {budgetIncomes.map(income => (

                <ListGroup.Item
                    key={income.id}
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        {income.incomeType}
                    </div>
                    <Badge bg="primary" pill>
                        {income.amount}
                    </Badge>
                </ListGroup.Item>
            ))}

        </ListGroup>






    )
}

export default IncomeList