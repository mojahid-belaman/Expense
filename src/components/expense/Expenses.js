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
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} onChangeFilter={filterHandle} />
      {filterExpense.length !== 0 ? filterExpense.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      )) : <div className="empty">No Expense Found.</div>}
    </Card>
  );
};

export default Expenses;
