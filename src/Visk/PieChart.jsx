import React from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const width = 300;
const height = 250;
const radius = Math.min(width, height) / 2;

const PieChart = () => (
  <svg width={width} height={height}>
    <Group top={height / 2} left={width / 2}>
      <Pie
        data={data}
        pieValue={d => d.value}
        outerRadius={radius - 10}
        innerRadius={radius * 0.5}
        cornerRadius={3}
        padAngle={0.02}
      >
        {pie => pie.arcs.map((arc, i) => {
          const color = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"][i % 4];
          return (
            <path key={i} d={pie.path(arc)} fill={color} />
          );
        })}
      </Pie>
    </Group>
  </svg>
);

export default PieChart;
