import React, { useContext, useState } from "react"
import { v4 as uuidV4 } from "uuid"

const BudgetsContext = React.createContext()


export function useBudgets() {
  return useContext(BudgetsContext)
}

export const BudgetsProvider = ({ children }) => {
  const [budgets, setBudgets] = useLocalStorage("budgets", [])
  const [selectedBudget, setSelectedBudget] = useLocalStorage("selectedBudget", [])


  return (
    <BudgetsContext.Provider
      value={{
        budgets,
        setBudgets,
        selectedBudget,
        setSelectedBudget
      }}
    >
      {children}
    </BudgetsContext.Provider>
  )
}