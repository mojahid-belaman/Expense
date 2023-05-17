import React from "react";

const ExpenseDate = ({date}) => {
  const newDate = new Date(date);
  const month = newDate.toLocaleString("en-ma", { month: "long" });
  const day = newDate.toLocaleString("en-ma", { day: "2-digit" });
  const year = newDate.getFullYear().toString();

  return (
    <div className="py-1 w-40 flex space-y-2 flex-col items-center text-white bg-[#4dabf5] border border-white rounded-md">
      <div className="font-bold">{month}</div>
      <div>{day}</div>
      <div className="font-bold">{year}</div>
    </div>
  );
};

export default ExpenseDate;
