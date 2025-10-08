import React from "react";
import EAreachart from "./AreaChart";
import EBarChart from "./BarChart";
import ELinechart from "./Linechart";
import EPieChart from "./PieChart";
import './Apachechart.css'
export default function ApacheEChartsPage() {
  return (
     <div className="chart-grid">
      <div className="chart-item"><EAreachart/></div>
      <div className="chart-item"><EBarChart /></div>
      <div className="chart-item"><ELinechart /></div>
      <div className="chart-item">< EPieChart/></div>
    </div>
  );
}