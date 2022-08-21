import React from "react";
import Expenses from "./components/expense/Expenses";
import NewExpense from "./components/newexpense/NewExpense";

function App() {
  const expenses = [
    {
      id: 1,
      date: new Date(2022, 7, 6),
      title: "Car Insurance",
      price: 300.37,
    },
    {
      id: 2,
      date: new Date(2022, 4, 2),
      title: "Laptop",
      price: 1000.37,
    },
    {
      id: 3,
      date: new Date(2022, 5, 4),
      title: "Table",
      price: 200.37,
    },
    {
      id: 4,
      date: new Date(2022, 6, 6),
      title: "Chair",
      price: 300.37,
    },
  ];

  const addExpense = (expense) => {
    console.log('App Component');
    console.log(expense);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpense} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
