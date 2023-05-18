import Chart from "../chart/Chart";
import {dataPoints} from "../../library/chartMonth";

const ExpenseChart = (props) => {
    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        dataPoints[expenseMonth].value += expense.price;
    }
  return <Chart dataPoints={dataPoints} />
};

export default ExpenseChart;
