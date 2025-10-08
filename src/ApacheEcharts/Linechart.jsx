import React from "react";
import ReactECharts from "echarts-for-react";

const LineChart = () => (
  <ReactECharts
    option={{
      title: { text: "Line Chart", left: "center" },
      tooltip: { trigger: "axis" },
      xAxis: { type: "category", data: ["Jan", "Feb", "Mar", "Apr", "May"] },
      yAxis: { type: "value" },
      series: [
        {
          type: "line",
          smooth: true,
          data: [400, 300, 200, 278, 189],
          itemStyle: { color: "#ff7300" },
        },
      ],
    }}
    style={{ height: 250 }}
  />
);

export default LineChart;
