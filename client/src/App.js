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
// navbar
import TopBar from './components/TopBar';

function App() {
  return (
    <Container>
      <Row className='mb-3'>
        <TopBar />
      </Row>
      <Row>
        <Col xs={12} md={3}>
          <BudgetPeriod />
        </Col>
        <Col xs={12} md={3}>
          <IncomeList />
        </Col>
        <Col xs={12} md={3}>
          <ExpenseList />
        </Col>
        <Col xs={12} md={3}>
          <BudgetSummary />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
