import { useEffect,useState } from 'react';

// bootstrap
import { Container, Row, Col } from 'react-bootstrap';

// components
import ExpenseForm from './components/ExpenseForm';
import IncomeForm from './components/IncomeForm';
import BudgetSummary from './components/BudgetSummary';
import ExpenseList from './components/ExpenseList';
import IncomeList from './components/IncomeList';
import Header from './components/Header';
import BudgetPeriod from './components/BudgetPeriod';
import BudgetPeriodForm from './components/BudgetPeriodForm';

function App() {

  // set state
  const [budgetPeriod, setBudgetPeriod] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);

  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} md={3}>
          <BudgetPeriod setPeriod={setBudgetPeriod} period={budgetPeriod}  />
        </Col>
        <Col xs={12} md={3}>
          <IncomeForm />
          <IncomeList />
        </Col>
        <Col xs={12} md={3}>
          <ExpenseForm />
          <ExpenseList />
        </Col>
        <Col xs={12} md={3}>
          <BudgetSummary />
        </Col>
      </Row>
      <p>Budget Period: {budgetPeriod}</p>
    </Container>
  );
}

export default App;
