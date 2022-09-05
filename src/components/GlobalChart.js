import React from "react";
import { useEffect, useState } from "react";

const GlobalChart = ({ coinsData }) => {
  const [dataArray, setDataArray] = useState([]);
  useEffect(() => {
    let chartData = [];
    
  }, [coinsData]);
  return (
    <div className="global-chart">
      <h1>TEST</h1>
    </div>
  );
};

export default GlobalChart;
