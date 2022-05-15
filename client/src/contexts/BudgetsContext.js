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

    // function to return all budgets
    const handleGetBudgets = () => {
        return budgets
    }

    // function to return selected budget
    const handleGetSelectedBudget = (budgetId) => {
        const selectedBudget = budgets.find(budget => budget.id === budgetId)
        setSelectedBudget(selectedBudget)
    }
    

    const handleSeedBudgets = () => {
        // delete all local storage
        localStorage.clear()
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        const years = [2020]
        const incomeTypes = ["Wage","Bonus","Freelancing","Other"]
        const expenseTypes = ["Rent","Shopping","Food","Transport","Utilities","Insurance","Health","Clothing","Entertainment","Debt","Other"]
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
                            incomeType: incomeTypes[Math.floor(Math.random() * incomeTypes.length)],
                            amount: Math.floor(Math.random() * (5000 - 500 + 1)) + 500
                        },
                        {
                            id: uuidV4(),
                            incomeType: incomeTypes[Math.floor(Math.random() * incomeTypes.length)],
                            amount: Math.floor(Math.random() * (5000 - 500 + 1)) + 500
                        }
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


    return (
        <BudgetsContext.Provider
            value={{
                budgets,
                setBudgets,
                selectedBudget,
                setSelectedBudget,
                handleSeedBudgets,
                handleGetBudgets,
                handleGetSelectedBudget
            }}
        >
            {children}
        </BudgetsContext.Provider>
    )
}