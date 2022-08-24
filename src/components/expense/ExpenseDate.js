import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = ({date}) => {
  const newDate = new Date(date);
  const month = newDate.toLocaleString("en-ma", { month: "long" });
  const day = newDate.toLocaleString("en-ma", { day: "2-digit" });
  const year = newDate.getFullYear().toString();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
