import React, { useState } from "react";
import Card from "../ui/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");
  const filterHandle = (year) => {
    setFilterYear(year);
  };
  const filterExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card>
      <ExpenseFilter selected={filterYear} onChangeFilter={filterHandle} />
      <ExpenseList items={filterExpense} />
    </Card>
  );
};

export default Expenses;
