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



  // function to return array of month names
  const getMonthNames = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return monthNames;
  }


  
  // calculate total income
  const calculateTotalIncome = () => {
    let totalIncome = 0;
    console.log(incomes);
    incomes.forEach(income => {
      totalIncome += parseInt(income.amount);
    });
    return totalIncome;
  }

  // calculate total expenses
  const calculateTotalExpenses = () => {
    let totalExpenses = 0;
    expenses.forEach(expense => {
      totalExpenses += parseInt(expense.amount);
    });
    return totalExpenses;
  }

  // calculate total saved
  const calculateTotalSaved = () => {
    let totalSaved = calculateTotalIncome() - calculateTotalExpenses();
    return totalSaved;
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
                  <BudgetSummary totalIncome={calculateTotalIncome()} totalExpesnes={calculateTotalExpenses()} totalSaved={calculateTotalSaved()} />
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
