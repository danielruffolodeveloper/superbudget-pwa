import React from 'react'
import { Row, Col } from 'react-bootstrap';

// components
import BudgetSummary from '../../components/BudgetSummary';
import ExpenseList from '../../components/ExpenseList';
import IncomeList from '../../components/IncomeList';
import BudgetPeriod from '../../components/BudgetPeriod';
import BudgetPeriodDropdown from '../../components/BudgetPeriodDropdown';

// budget context
import { useBudgets } from '../../contexts/BudgetsContext';

// use media hook
import useMedia from '../../hooks/useMedia';

const Dashboard = () => {
    const { selectedBudget, budgets } = useBudgets()
    const isDesktop = useMedia('(min-width: 960px)');
    return (
        <>
            {budgets.length < 1 && (
                <Row className='mt-3'>
                    <h6>Looks like you have not created a budget</h6>
                    <h7>Create a new one in the <b>`Options`</b> dropdown or seed a fake one as a demo</h7>
                </Row>
            )}

            {budgets.length > 0 && (
                <Row className='mt-3'>

                    <Row>
                        <Col sm={12} md={12} lg={3} xl={3} className="mt-2">
                            {isDesktop ? <BudgetPeriod /> : <BudgetPeriodDropdown />}
                        </Col>
                        <Col sm={12} md={12} lg={3} xl={3} className="mt-2">
                            {selectedBudget.id && (
                                <IncomeList />
                            )}
                        </Col>
                        <Col sm={12} md={12} lg={3} xl={3} className="mt-2">
                            {selectedBudget.id && (
                                <ExpenseList />
                            )}
                        </Col>
                        <Col sm={12} md={12} lg={3} xl={3} className="mt-2">
                            {selectedBudget.id && (
                                <BudgetSummary />
                            )}
                        </Col>
                    </Row>
                </Row>

            )}
        </>
    )
}

export default Dashboard