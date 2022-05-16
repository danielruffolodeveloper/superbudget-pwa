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

function App() {

  const [currentBudgetMonth, setCurrentBudgetMonth] = useState("")
  const [currentBudget, setCurrentBudget] = useState({})
  const [budgets, setBudgets] = useState([]);
  const [expenses, setBudgetExpenses] = useState([]);
  const [incomes, setBudgetIncomes] = useState([]);

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

  const currentBudgetHandler = (month) => {
    const exisingBudget = budgets.find(budget => budget.month === month);
    if (exisingBudget) {
      setCurrentBudgetMonth(month);
      setCurrentBudget(exisingBudget);
    } else {
      addBudget();
      setCurrentBudgetMonth(month);
    }
  }

  const calculateTotalIncome = () => {
    let totalIncome = 0;
    console.log(incomes);
    incomes.forEach(income => {
      totalIncome += parseInt(income.amount);
    });
    return totalIncome;
  }

  const calculateTotalExpenses = () => {
    let totalExpenses = 0;
    expenses.forEach(expense => {
      totalExpenses += parseInt(expense.amount);
    });
    return totalExpenses;
  }

  const calculateTotalSaved = () => {
    let totalSaved = calculateTotalIncome() - calculateTotalExpenses();
    return totalSaved;
  }

  return (
    <Container>
      <Row>
        <Col xs={12} md={3}>
          <BudgetPeriod budgetMonth={currentBudgetMonth} setBudgetMonth={currentBudgetHandler} />
        </Col>
        <Col xs={12} md={3}>
          <IncomeList budgetIncomes={incomes} />
          <IncomeForm/>
        </Col>
        <Col xs={12} md={3}>
          <ExpenseList budgetExpenses={expenses} />
          <ExpenseForm/>
        </Col>
        <Col xs={12} md={3}>
          <BudgetSummary totalIncome={calculateTotalIncome()} totalExpesnes={calculateTotalExpenses()} totalSaved={calculateTotalSaved()} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
