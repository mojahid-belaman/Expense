import React from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = () => {
  const expenses = [
    {
      id: 1,
      date: new Date(2022, 7, 6),
      title: "Car Insurance",
      price: 300.37,
    },
    {
      id: 2,
      date: new Date(2022, 4, 2),
      title: "Laptop",
      price: 1000.37,
    },
    {
      id: 3,
      date: new Date(2022, 5, 4),
      title: "Table",
      price: 200.37,
    },
    {
        id: 4,
        date: new Date(2022, 6, 6),
        title: "Chair",
        price: 300.37,
    }
  ];
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </Card>
  );
};

export default Expenses;
