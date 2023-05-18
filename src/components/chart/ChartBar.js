import React from "react";

const ChartBar = (props) => {
  let barFillHeight = '0%';
  if (props.maxValue > 0)
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";

  return (
    <div className="h-full w-5 flex flex-col items-center">
      <div className="h-full w-full border-2 border-white bg-primary rounded-xl overflow-hidden flex flex-col-reverse">
        <div className="bg-secondary w-full transition-colors" style={{height: barFillHeight}}></div>
      </div>
      <div className="text-white font-bold text-xl">{props.label}</div>
    </div>
  );
};

export default ChartBar;
