import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

// components
import ExpenseForm from './components/ExpenseForm';
import IncomeForm from './components/IncomeForm';
import BudgetSummary from './components/BudgetSummary';
import ExpenseList from './components/ExpenseList';
import IncomeList from './components/IncomeList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">

      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <IncomeForm />
            <IncomeList/>
          </Col>
          <Col xs={6} md={4}>
            <ExpenseForm/>
            <ExpenseList/>
          </Col>
          <Col xs={6} md={4}>
            <BudgetSummary/>
          </Col>
        </Row>
      </Container>



    </div>
  );
}

export default App;
