import { useEffect, useState } from 'react';

// bootstrap
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';

// components
import ExpenseForm from './components/ExpenseForm';
import IncomeForm from './components/IncomeForm';
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
  const isDesktop = useMedia('(min-width: 960px)');

  return (
    <Container>
      <Row className='mb-3'>
        <TopBar />
      </Row>
      <Row>
        <Col sm={12} md={12} lg={3} xl={3}  className="mt-2">
          {isDesktop ? <BudgetPeriod /> : <BudgetPeriodDropdown/>}
        </Col>
        <Col sm={12} md={12} lg={3} xl={3}  className="mt-2">
          <IncomeList />
        </Col>
        <Col sm={12} md={12} lg={3} xl={3}  className="mt-2">
          <ExpenseList />
        </Col>
        <Col sm={12} md={12} lg={3} xl={3}  className="mt-2">
          <BudgetSummary />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
