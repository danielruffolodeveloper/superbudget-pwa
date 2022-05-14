import React from "react";
import Chart from "react-apexcharts";

const BudgetSummary = ({expenseLabels, expenseAmounts}) => {

  const options = { 
    labels: [...expenseLabels]
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={[...expenseAmounts]}
            type="donut"  
          />
        </div>
      </div>
    </div>
  );
};

export default BudgetSummary;
