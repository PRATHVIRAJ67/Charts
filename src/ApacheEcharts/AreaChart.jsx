import React from "react";
import ReactECharts from "echarts-for-react";

const AreaChart = () => (
  <ReactECharts
    option={{
      title: { text: "Area Chart", left: "center" },
      tooltip: { trigger: "axis" },
      xAxis: { type: "category", data: ["Jan", "Feb", "Mar", "Apr", "May"], boundaryGap: false },
      yAxis: { type: "value" },
      series: [
        {
          name: "Series 1",
          type: "line",
          smooth: true,
          data: [400, 300, 200, 278, 189],
          areaStyle: { opacity: 0.3 },
          symbol: "circle",
          symbolSize: 6,
          lineStyle: { color: "#8884d8" },
          itemStyle: { color: "#8884d8" },
        },
      ],
    }}
    style={{ height: 250 }}
  />
);

export default AreaChart;
