import './App.css';
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
  return (
      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
          <Col>
            <BudgetPeriod />
            <BudgetPeriodForm/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <IncomeForm />
            <IncomeList/>
          </Col>
          <Col xs={12} md={4}>
            <ExpenseForm/>
            <ExpenseList/>
          </Col>
          <Col xs={12} md={4}>
            <BudgetSummary/>
          </Col>
        </Row>
      </Container>
  );
}

export default App;
