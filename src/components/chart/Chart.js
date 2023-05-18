import React from "react";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const values = props.dataPoints.map((el) => el.value);
  const totalMax = Math.max(...values);
  return (
    <div className="p-4 mb-3 bg-tertiary h-40 rounded-lg text-center flex justify-around">
      {props.dataPoints.map((el) => (
        <ChartBar
          key={el.label}
          value={el.value}
          maxValue={totalMax}
          label={el.label}
        />
      ))}
    </div>
  );
};

export default Chart;
