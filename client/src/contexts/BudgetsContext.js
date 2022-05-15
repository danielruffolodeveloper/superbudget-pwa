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

  const createBudget = (budget) => {
    setBudgets([...budgets, { ...budget}])
    }



  return (
    <BudgetsContext.Provider
      value={{
        budgets,
        setBudgets,
        selectedBudget,
        setSelectedBudget,
        createBudget

      }}
    >
      {children}
    </BudgetsContext.Provider>
  )
}