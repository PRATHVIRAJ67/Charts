import React from "react";
import { AreaClosed, LinePath } from "@visx/shape";
import { scaleLinear, scalePoint } from "@visx/scale";
import { Group } from "@visx/group";

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

const xScale = scalePoint({
  domain: data.map(d => d.x),
  range: [margin.left, width - margin.right],
});

const yScale = scaleLinear({
  domain: [0, Math.max(...data.map(d => d.y))],
  range: [height - margin.bottom, margin.top],
});

const AreaChart = () => (
  <svg width={width} height={height}>
    <Group>
      <AreaClosed
        data={data}
        x={d => xScale(d.x)}
        y={d => yScale(d.y)}
        yScale={yScale}
        strokeWidth={0}
        fill="#8884d8"
        fillOpacity={0.3}
      />
      <LinePath
        data={data}
        x={d => xScale(d.x)}
        y={d => yScale(d.y)}
        stroke="#8884d8"
        strokeWidth={2}
      />
    </Group>
  </svg>
);

export default AreaChart;
