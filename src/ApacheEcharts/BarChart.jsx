import React from "react";
import ReactECharts from "echarts-for-react";

const BarChart = () => (
  <ReactECharts
    option={{
      title: { text: "Bar Chart", left: "center" },
      tooltip: {},
      xAxis: { type: "category", data: ["Jan", "Feb", "Mar", "Apr", "May"] },
      yAxis: { type: "value" },
      series: [
        {
          type: "bar",
          data: [400, 300, 200, 278, 189],
          itemStyle: { color: "#82ca9d" },
        },
      ],
    }}
    style={{ height: 250 }}
  />
);

export default BarChart;
