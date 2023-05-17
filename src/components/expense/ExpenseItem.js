import React from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ title, price, date }) => {
  return (
    <li className="mb-3 p-5 text-2xl rounded-lg flex flex-wrap flex-col space-y-5 md:space-y-0 md:flex-row justify-around items-center bg-secondary">
      <ExpenseDate date={date} />
      <h2 className="flex-1 text-center font-bold tracking-wider text-white">{title}</h2>
      <div className="px-5 py-4 w-fit text-center border border-white rounded-lg font-bold text-white bg-[#4dabf5]">
        <span className="text-[#00e676]">$</span>
        {price}
      </div>
    </li>
  );
};

export default ExpenseItem;
