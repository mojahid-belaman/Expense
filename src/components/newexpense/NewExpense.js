import React, { useState } from "react";
import Card from "../ui/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(true);
  };
  const savaDataExpense = (expense) => {
    const expenseData = {
      ...expense,
      id: parseInt(Math.random() * 100).toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <Card className="expenses">
      {!show && (
        <div className="addExpense">
          <button onClick={handleClick}>Add New Expense</button>
        </div>
      )}
      {show && (
        <ExpenseForm onSaveExpenseData={savaDataExpense} setShow={setShow} />
      )}
    </Card>
  );
};

export default NewExpense;
