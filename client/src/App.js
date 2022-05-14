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


  const [currentBudgetMonth, setCurrentBudgetMonth] = useState("")
  const [budgets, setBudgets] = useState([]);
  const [expenses, setBudgetExpenses] = useState([]);
  const [incomes, setBudgetIncomes] = useState([]);

 

  // function to create a new budget
  const addBudget = () => {
    let newBudget = {
      id: Math.floor(Math.random() * 100),
      month: "",
      startDate: "",
      endDate: "",
      incomes: [],
      expenses: [],
    }
    setBudgets([...budgets, newBudget]);
  }

   // fuction to set current budget period
   const currentBudgetHandler = (month) => {
    const exisingBudget = budgets.find(budget => budget.month === month);
    if (exisingBudget) {
      setCurrentBudgetMonth(month);
    } else {
      addBudget();
      setCurrentBudgetMonth(month);
    }
  }

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
    </Container>
  );
}

export default App;
