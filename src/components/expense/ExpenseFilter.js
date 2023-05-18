import React from "react";
import Label from "../atoms/Label";

const dates = [2022, 2021, 2020, 2019];

const ExpenseFilter = (props) => {
  const funcChangeFilter = (e) => {
    props.onChangeFilter(e.target.value);
  };
  return (
    <div className="flex justify-between items-center mb-5">
      <Label text={"Filter By Year: "} />
      <select
        className="p-2 rounded-lg outline-none border border-[#039be5] text-[#616161] font-semibold text-xl"
        select={props.selected}
        onChange={funcChangeFilter}
      >
        {dates.map((ele, idx) => (
          <option key={idx} value={ele}>{ele}</option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
