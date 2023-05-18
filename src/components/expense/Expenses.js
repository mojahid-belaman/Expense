import React, { useState } from "react";
import Card from "../ui/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2023");
  const filterHandle = (year) => {
    setFilterYear(year);
  };
  const filterExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card>
      <ExpenseFilter selected={filterYear} onChangeFilter={filterHandle} />
      <ExpenseChart expenses={filterExpense}/>
      <ExpenseList items={filterExpense} />
    </Card>
  );
};

export default Expenses;
