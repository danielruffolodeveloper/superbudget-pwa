import { useEffect, useState } from 'react';

// bootstrap
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';

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
  const [expenses, setBudgetExpenses] = useState([]);
  const [incomes, setBudgetIncomes] = useState([]);

  // transformations
  const expenseLabels = expenses.map(expense => expense.expenseType);
  const expenseAmounts = expenses.map(expense => parseInt(expense.amount));
  const incomeLabels = incomes.map(income => income.incomeType);
  const incomeAmounts = incomes.map(income => income.amount);

  // calculations
  // total expenses
  const totalExpenses = expenses.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  // total incomes
  const totalIncomes = incomes.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  // function to return array of month names
  const getMonthNames = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return monthNames;
  }

  return (
    <Container>
      <Row>
        <Tabs defaultActiveKey="January" id="uncontrolled-tab-example" className="mb-3">
          {getMonthNames().map(month => (
            <Tab eventKey={month} title={month} >

              <Row>
                <Col>
                  <h3>{month}</h3>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col xs={12} md={4}>
                  <IncomeForm setBudgetIncomes={setBudgetIncomes} budgetIncomes={incomes} />
                  <IncomeList budgetIncomes={incomes} />
                </Col>
                <Col xs={12} md={4}>
                  <ExpenseForm setBudgetExpenses={setBudgetExpenses} budgetExpenses={expenses} />
                  <ExpenseList budgetExpenses={expenses} />
                </Col>
                <Col xs={12} md={4}>
                  <BudgetSummary expenseLabels={expenseLabels} expenseAmounts={expenseAmounts} ttlIncome={totalIncomes} />
                </Col>
              </Row>

            </Tab>
          ))}
        </Tabs>
      </Row>
    </Container>
  );
}

export default App;
