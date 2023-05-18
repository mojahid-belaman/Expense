import React, { useState } from "react";
import Card from "../ui/Card";
import ExpenseForm from "./ExpenseForm";
import Button from "../atoms/Button";

const NewExpense = (props) => {
  const [show, setShow] = useState(false);
  const handleShowClick = () => {
    setShow(true);
  };
  const handleHideClick = () => {
    setShow(false);
  };
  const savaDataExpense = (expense) => {
    const expenseData = {
      ...expense,
      id: parseInt(Math.random() * 100).toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <Card>
      {!show && (
        <div className="flex justify-center">
          <Button onClick={handleShowClick} text={'New Expense'} />
        </div>
      )}
      {show && (
        <ExpenseForm onSaveExpenseData={savaDataExpense} onClick={handleHideClick} />
      )}
    </Card>
  );
};

export default NewExpense;
