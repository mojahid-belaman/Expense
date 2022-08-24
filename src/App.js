import React, { useState } from "react";
import Expenses from "./components/expense/Expenses";
import NewExpense from "./components/newexpense/NewExpense";
import {expensesData} from './library/expensesData'

function App() {
  const [expenses, setExpenses] = useState(expensesData)

  const addExpense = (expense) => {
    setExpenses(prevExpense => {
      return [expense, ...prevExpense]
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpense} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
