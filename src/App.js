import React, { useState } from "react";
import Expenses from "./components/expense/Expenses";
import NewExpense from "./components/newexpense/NewExpense";
import { expensesData } from "./library/expensesData";

function App() {
  const [expenses, setExpenses] = useState(expensesData);

  const addExpense = (expense) => {
    setExpenses((prevExpense) => [expense, ...prevExpense]);
  };
  return (
    <div className="bg-primary h-screen py-10 overflow-y-auto">
      <div className="container mx-auto flex flex-col space-y-5">
        <NewExpense onAddExpense={addExpense} />
        <Expenses items={expenses} />
      </div>
    </div>
  );
}

export default App;
