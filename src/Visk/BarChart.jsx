import React from "react";
import { Bar } from "@visx/shape";
import { scaleLinear, scaleBand } from "@visx/scale";

const data = [
  { x: "Jan", y: 400 },
  { x: "Feb", y: 300 },
  { x: "Mar", y: 200 },
  { x: "Apr", y: 278 },
  { x: "May", y: 189 },
];

const width = 300;
const height = 250;
const margin = { top: 20, bottom: 30, left: 40, right: 20 };

const xScale = scaleBand({
  domain: data.map(d => d.x),
  range: [margin.left, width - margin.right],
  padding: 0.2,
});

const yScale = scaleLinear({
  domain: [0, Math.max(...data.map(d => d.y))],
  range: [height - margin.bottom, margin.top],
});

const BarChart = () => (
  <svg width={width} height={height}>
    {data.map((d, i) => (
      <Bar
        key={i}
        x={xScale(d.x)}
        y={yScale(d.y)}
        width={xScale.bandwidth()}
        height={height - margin.bottom - yScale(d.y)}
        fill="#82ca9d"
      />
    ))}
  </svg>
);

export default BarChart;
