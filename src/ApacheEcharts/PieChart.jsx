import React from "react";
import ReactECharts from "echarts-for-react";

const PieChart = () => (
  <ReactECharts
    option={{
      title: { text: "Pie Chart", left: "center" },
      tooltip: { trigger: "item" },
      series: [
        {
          type: "pie",
                  radius: "70%", // donut style
          data: [
            { value: 400, name: "Group A" },
            { value: 300, name: "Group B" },
            { value: 300, name: "Group C" },
            { value: 200, name: "Group D" },
          ],
          color: ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"],
          emphasis: { itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: "rgba(0,0,0,0.5)" } },
          label: { show: true },
        },
      ],
    }}
    style={{ height: 250 }}
  />
);

export default PieChart;
