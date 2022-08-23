import React, { useState } from "react";
import Card from "../ui/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const year = new Date().getFullYear().toString()
  const [filter, setFilter] = useState(year)
  const filterHandle = (year) => {
    setFilter(year)
  }
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filter} funcFilter={filterHandle} />
      {props.items.length !== 0 ? props.items.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      )) : <div className="empty">EMPTY</div>}
    </Card>
  );
};

export default Expenses;
