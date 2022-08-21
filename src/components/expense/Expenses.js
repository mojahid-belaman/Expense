import React from "react";
import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  
  return (
    <Card className="expenses">
      {props.items.length !== 0 ? props.items.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      )) : <div className="empty">EMPTY</div>}
    </Card>
  );
};

export default Expenses;
