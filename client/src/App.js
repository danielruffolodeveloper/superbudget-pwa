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

  // set global state
  // should we lift this up to a higher level?
  const [budgetPeriod, setBudgetPeriod] = useState("");
  const [expenses, setBudgetExpenses] = useState([]);
  const [incomes, setBudgetIncomes] = useState([]);

  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} md={3}>
          <BudgetPeriod setPeriod={setBudgetPeriod} period={budgetPeriod}  />
        </Col>
        <Col xs={12} md={3}>
          <IncomeForm setBudgetIncomes={setBudgetIncomes} budgetIncomes={incomes}/>
          <IncomeList budgetIncomes={incomes} />
        </Col>
        <Col xs={12} md={3}>
          <ExpenseForm setBudgetExpenses={setBudgetExpenses} budgetExpenses={expenses} />
          <ExpenseList budgetExpenses={expenses} />
        </Col>
        <Col xs={12} md={3}>
          <BudgetSummary />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
