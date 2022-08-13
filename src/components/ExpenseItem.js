import React from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__title">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.price}</div>
    </Card>
  );
};

export default ExpenseItem;
