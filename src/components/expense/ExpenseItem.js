import React from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ title, price, date }) => {
  return (
    <li className="mb-3 rounded-lg flex flex-col md:flex-row justify-around items-center bg-secondary p-2">
      <ExpenseDate date={date} />
      <h2 className="flex-1 text-center font-bold tracking-wider text-white text-lg">{title}</h2>
      <div className="px-5 py-4 w-32 text-center border border-white rounded-lg font-bold text-white bg-[#4dabf5]">
        <span className="text-[#00e676]">$</span>
        {price}
      </div>
    </li>
  );
};

export default ExpenseItem;
