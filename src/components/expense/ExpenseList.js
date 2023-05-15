import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.items.length === 0)
    return <h2 className="bg-secondary text-white font-bold text-lg text-center py-2 rounded-md border border-white">Found No Expenses.</h2>;

  return (
    <ul className="">
      {props.items.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </ul>
  );
};

export default ExpenseList;
