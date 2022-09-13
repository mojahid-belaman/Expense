import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'

const ExpenseList = (props) => {
  if (props.items.length === 0)
    return <h2 className="empty">Found No Expenses.</h2>;

  return (
    <ul className="itemList">
      {props.items.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </ul>
  );
};

export default ExpenseList;
