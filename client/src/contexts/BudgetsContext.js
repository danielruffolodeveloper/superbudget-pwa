import React, { useContext, useState } from "react"
import { v4 as uuidV4 } from "uuid"
import useLocalStorage from "../hooks/useLocalStorage.js"

const BudgetsContext = React.createContext()


export function useBudgets() {
    return useContext(BudgetsContext)
}

export const BudgetsProvider = ({ children }) => {
    const [budgets, setBudgets] = useLocalStorage("budgets", [])
    const [selectedBudget, setSelectedBudget] = useLocalStorage("selectedBudget", [])

    const [editIncomeMode, setEditIncomeMode] = useState(false)
    const [editExpenseMode, setEditExpenseMode] = useState(false)

    const [editIncome, setEditIncome] = useState({})
    const [editExpense, setEditExpense] = useState({})

    const [showIncomeModal, setShowIncomeModal] = useState(false)
    const [showExpenseModal, setShowExpenseModal] = useState(false)


    // show incomesModal
    const handleShowIncomesModal = () => {
        setShowIncomeModal(!showIncomeModal)
    }

    // show expensesModal
    const handleShowExpensesModal = () => {
        setShowExpenseModal(!showExpenseModal)
    }

    // function to return all budgets
    const handleGetBudgets = () => {
        return budgets
    }

    // function to return selected budget
    const handleGetSelectedBudget = (budgetId) => {
        const selectedBudget = budgets.find(budget => budget.id === budgetId)
        setSelectedBudget(selectedBudget)
    }

    // function to update current selected budget with new incomes
    const handleUpdateSelectedBudgetIncomes = (newIncome) => {
        const updatedBudget = {
            ...selectedBudget,
            incomes: [...selectedBudget.incomes, newIncome]
        }
        const updatedBudgets = budgets.map(budget => budget.id === updatedBudget.id ? updatedBudget : budget)
        setBudgets(updatedBudgets)
        setSelectedBudget(updatedBudget)
    }

    // function to update current selected budget with new expenses
    const handleUpdateSelectedBudgetExpenses = (newExpense) => {
        const updatedBudget = {
            ...selectedBudget,
            expenses: [...selectedBudget.expenses, newExpense]
        }
        const updatedBudgets = budgets.map(budget => budget.id === updatedBudget.id ? updatedBudget : budget)
        setBudgets(updatedBudgets)
        setSelectedBudget(updatedBudget)
    }

    const handleSetEditIncomeMode = (income) => {
        setEditIncomeMode(!editIncomeMode)

        if (!editIncomeMode) {
            setEditIncome(income)
        } else {
            setEditIncome({})
        }
    }

    const handleSetEditExpenseMode = (expense) => {
        setEditExpenseMode(!editExpenseMode)

        if (!editExpenseMode) {
            setEditExpense(expense)
        } else {
            setEditExpense({})
        }

    }

    // function to update the current selected budget with edited income
    const handleUpdateSelectedBudgetIncome = (income) => {

        let updatedIncome = {
            id: editIncome.id,
            incomeType: income.incomeType,
            amount: income.amount
        }

        // find and update the current selected budget income
        const updatedBudget = {
            ...selectedBudget,
            incomes: selectedBudget.incomes.map(budgetIncome => budgetIncome.id === updatedIncome.id ? updatedIncome : budgetIncome)
        }
        // update budgets with the new budget
        const updatedBudgets = budgets.map(budget => budget.id === updatedBudget.id ? updatedBudget : budget)
        setBudgets(updatedBudgets)
        setSelectedBudget(updatedBudget)
    }

    // function to update the current selected budget with edited expense
    const handleUpdateSelectedBudgetExpense = (expense) => {

        let updatedExpense = {
            id: editExpense.id,
            expenseType: expense.expenseType,
            amount: expense.amount
        }

        const updatedBudget = {
            ...selectedBudget,
            expenses: selectedBudget.expenses.map(expense => expense.id === updatedExpense.id ? updatedExpense : expense)
        }
        const updatedBudgets = budgets.map(budget => budget.id === updatedBudget.id ? updatedBudget : budget)
        setBudgets(updatedBudgets)
        setSelectedBudget(updatedBudget)
    }

    // handle removing an income from the current selected budget
    const removeIncome = (incomeId) => {
        const updatedBudget = {
            ...selectedBudget,
            incomes: selectedBudget.incomes.filter(income => income.id !== incomeId)
        }
        const updatedBudgets = budgets.map(budget => budget.id === updatedBudget.id ? updatedBudget : budget)
        setBudgets(updatedBudgets)
        setSelectedBudget(updatedBudget)
    }

    // handle removing an expense from the current selected budget
    const removeExpense = (expenseId) => {
        const updatedBudget = {
            ...selectedBudget,
            expenses: selectedBudget.expenses.filter(expense => expense.id !== expenseId)
        }
        const updatedBudgets = budgets.map(budget => budget.id === updatedBudget.id ? updatedBudget : budget)
        setBudgets(updatedBudgets)
        setSelectedBudget(updatedBudget)
    }

    const handleSeedBudgets = () => {
        // delete all local storage
        localStorage.clear()
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        const years = [2020]
        const incomeTypes = ["Wage", "Bonus", "Freelancing", "Other"]
        const expenseTypes = ["Rent", "Shopping", "Food", "Transport", "Utilities", "Insurance", "Health", "Clothing", "Entertainment", "Debt", "Other"]
        const budgetMonths = []

        years.forEach(year => {
            months.forEach(month => {
                const budgetMonth = {
                    id: uuidV4(),
                    month: month,
                    year: year,
                    incomes: [
                        {
                            id: uuidV4(),
                            incomeType: incomeTypes[0],
                            amount: Math.floor(Math.random() * (5000 - 500 + 1)) + 500
                        },
                        {
                            id: uuidV4(),
                            incomeType: incomeTypes[Math.floor(Math.random() * (incomeTypes.length - 1)) + 1],
                            amount: Math.floor(Math.random() * (5000 - 500 + 1)) + 500
                        },
                    ],
                    expenses: [
                        {
                            id: uuidV4(),
                            expenseType: expenseTypes[Math.floor(Math.random() * expenseTypes.length)],
                            amount: Math.floor(Math.random() * (1000 - 100 + 1)) + 100
                        },
                        {
                            id: uuidV4(),
                            expenseType: expenseTypes[Math.floor(Math.random() * expenseTypes.length)],
                            amount: Math.floor(Math.random() * (1000 - 100 + 1)) + 100
                        },
                        {
                            id: uuidV4(),
                            expenseType: expenseTypes[Math.floor(Math.random() * expenseTypes.length)],
                            amount: Math.floor(Math.random() * (1000 - 100 + 1)) + 100
                        },
                        {
                            id: uuidV4(),
                            expenseType: expenseTypes[Math.floor(Math.random() * expenseTypes.length)],
                            amount: Math.floor(Math.random() * (1000 - 100 + 1)) + 100
                        },
                    ],
                }
                budgetMonths.push(budgetMonth)
            })
        })
        setBudgets(budgetMonths)
    }

    // function to clear selected income and set edit mode to false
    const clearSelectedIncome = () => {
        setEditIncome({})
        setEditIncomeMode(false)
    }

    // function to clear selected expense and set edit mode to false
    const clearSelectedExpense = () => {
        setEditExpense({})
        setEditExpenseMode(false)
    }



    return (
        <BudgetsContext.Provider
            value={{
                budgets,
                setBudgets,
                selectedBudget,
                setSelectedBudget,
                handleSeedBudgets,
                handleGetBudgets,
                handleGetSelectedBudget,
                handleUpdateSelectedBudgetIncomes,
                handleUpdateSelectedBudgetIncome,
                handleUpdateSelectedBudgetExpenses,
                handleUpdateSelectedBudgetExpense,
                handleSetEditIncomeMode,
                handleSetEditExpenseMode,
                editIncomeMode,
                editIncome,
                editExpenseMode,
                editExpense,
                setEditExpense,
                setEditIncome,
                clearSelectedIncome,
                clearSelectedExpense,
                removeIncome,
                removeExpense,
                handleShowIncomesModal,
                handleShowExpensesModal,
                showIncomeModal,
                showExpenseModal


            }}
        >
            {children}
        </BudgetsContext.Provider>
    )
}