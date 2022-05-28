import { useContext } from 'react';
import { Routes, Route, Link } from "react-router-dom";
// bootstrap
import { Container, Row, Col, Tabs, Tab, Button } from 'react-bootstrap';

// budget context
import { useBudgets } from './contexts/BudgetsContext';

// components
import BudgetSummary from './components/BudgetSummary';
import ExpenseList from './components/ExpenseList';
import IncomeList from './components/IncomeList';
import BudgetPeriod from './components/BudgetPeriod';
import BudgetPeriodDropdown from './components/BudgetPeriodDropdown';

// use media hook
import useMedia from './hooks/useMedia';

// navbar
import TopBar from './components/TopBar';

function App() {
  const { selectedBudget, budgets } = useBudgets()
  const isDesktop = useMedia('(min-width: 960px)');

  return (
    <Container>
      <Row className='mb-3'>
        <TopBar />
      </Row>

      {budgets.length < 1 && (
        <Row className='mt-3'>
          <h6>Looks like you have not created a budget</h6>
          <h7>Create a new one in the <b>`Options`</b> dropdown or seed a fake one as a demo</h7>
        </Row>
      )}

      {budgets.length > 0 && (
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
      )}
    </Container>
  );
}

export default App;
