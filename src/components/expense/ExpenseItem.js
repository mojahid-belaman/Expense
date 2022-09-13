import React from "react";
import Card from "../ui/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({title, price, date}) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__title">
          <h2>{title}</h2>
        </div>
        <div className="expense-item__price">{price}<span className="dollar">$</span></div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
