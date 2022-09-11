import React, { useState } from "react";
import Card from "../ui/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const year = new Date().getFullYear().toString();
  const [filterYear, setFilterYear] = useState(year)
  const filterHandle = (year) => {
    setFilterYear(year)
  }
  const filterExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  })
  let expenseContent = <div className="empty">No Expense Found.</div>
  if (filterExpense.length > 0) {
    expenseContent = filterExpense.map((expense) => (
      <ExpenseItem key={expense.id} {...expense} />
   ))
  }
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} onChangeFilter={filterHandle} />
      {expenseContent}
    </Card>
  );
};

export default Expenses;
