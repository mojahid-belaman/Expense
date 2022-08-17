import React from "react";
import Expenses from "./components/expense/Expenses";
import NewExpense from "./components/newexpense/NewExpense";

function App() {
  return (
    <div>
      <NewExpense />
      <Expenses />
    </div>
  );
}

export default App;
