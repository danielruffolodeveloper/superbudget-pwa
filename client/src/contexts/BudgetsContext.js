import React, { useContext, useState } from "react"
import { v4 as uuidV4 } from "uuid"
import useLocalStorage from "../hooks/useLocalStorage.js"

const BudgetsContext = React.createContext()


export function useBudgets() {
    return useContext(BudgetsContext)
}

export const BudgetsProvider = ({ children }) => {
    const [budgets, setBudgets] = useLocalStorage("budgets", [])
    const [selectedBudget, setSelectedBudget] = useLocalStorage("selectedBudget", {})

    const [editIncomeMode, setEditIncomeMode] = useState(false)
    const [editExpenseMode, setEditExpenseMode] = useState(false)

    const [editIncome, setEditIncome] = useState({})
    const [editExpense, setEditExpense] = useState({})

    const [showIncomeModal, setShowIncomeModal] = useState(false)
    const [showExpenseModal, setShowExpenseModal] = useState(false)


    const handleShowIncomesModal = () => {
        setShowIncomeModal(!showIncomeModal)
    }

    const handleShowExpensesModal = () => {
        setShowExpenseModal(!showExpenseModal)
    }

    const handleGetBudgets = () => {
        return budgets
    }

    const handleGetSelectedBudget = (budgetId) => {
        const selectedBudget = budgets.find(budget => budget.id === budgetId)
        setSelectedBudget(selectedBudget)
    }

    const handleUpdateSelectedBudgetIncomes = (newIncome) => {
        const updatedBudget = {
            ...selectedBudget,
            incomes: [...selectedBudget.incomes, newIncome]
        }
        const updatedBudgets = budgets.map(budget => budget.id === updatedBudget.id ? updatedBudget : budget)
        setBudgets(updatedBudgets)
        setSelectedBudget(updatedBudget)
    }

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
        setEditIncome(income)
    }

    const handleSetEditExpenseMode = (expense) => {
        setEditExpenseMode(!editExpenseMode)
        setEditExpense(expense)
    }

    const handleUpdateSelectedBudgetIncome = (income) => {

        let updatedIncome = {
            id: editIncome.id,
            incomeType: income.incomeType,
            amount: income.amount
        }

        const updatedBudget = {
            ...selectedBudget,
            incomes: selectedBudget.incomes.map(budgetIncome => budgetIncome.id === updatedIncome.id ? updatedIncome : budgetIncome)
        }

        const updatedBudgets = budgets.map(budget => budget.id === updatedBudget.id ? updatedBudget : budget)
        setBudgets(updatedBudgets)
        setSelectedBudget(updatedBudget)
    }

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

    const removeIncome = (incomeId) => {
        const updatedBudget = {
            ...selectedBudget,
            incomes: selectedBudget.incomes.filter(income => income.id !== incomeId)
        }
        const updatedBudgets = budgets.map(budget => budget.id === updatedBudget.id ? updatedBudget : budget)
        setBudgets(updatedBudgets)
        setSelectedBudget(updatedBudget)
    }

    const removeExpense = (expenseId) => {
        const updatedBudget = {
            ...selectedBudget,
            expenses: selectedBudget.expenses.filter(expense => expense.id !== expenseId)
        }
        const updatedBudgets = budgets.map(budget => budget.id === updatedBudget.id ? updatedBudget : budget)
        setBudgets(updatedBudgets)
        setSelectedBudget(updatedBudget)
    }

    const handleInitialiseBudgets = () => {
        localStorage.clear()
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        const years = [new Date().getFullYear()]
        const budgetMonths = []

        years.forEach(year => {
            months.forEach(month => {
                const budgetMonth = {
                    id: uuidV4(),
                    month: month,
                    year: year,
                    incomes: [],
                    expenses: [],
                }
                budgetMonths.push(budgetMonth)
            })
        })
        setBudgets(budgetMonths)
    }

    // handle delete budget
    const handleDeleteAllBudgets = () => {
        localStorage.clear()
        setBudgets([])
        setSelectedBudget([])
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

    const clearSelectedIncome = () => {
        setEditIncome({})
        setEditIncomeMode(false)
    }

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
                handleInitialiseBudgets,
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
                showExpenseModal,
                handleDeleteAllBudgets


            }}
        >
            {children}
        </BudgetsContext.Provider>
    )
}