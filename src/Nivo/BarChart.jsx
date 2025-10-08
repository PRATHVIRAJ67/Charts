import React from 'react'
import { ResponsiveBar } from '@nivo/bar';

const data = [
  { month: 'Jan', uv: 400 },
  { month: 'Feb', uv: 300 },
  { month: 'Mar', uv: 200 },
  { month: 'Apr', uv: 278 },
  { month: 'May', uv: 189 },
];


const BarChart = () => {
  return (
     <div style={{ height: 250 }}>
    <ResponsiveBar
      data={data}
      keys={['uv']}
      indexBy="month"
      margin={{ top: 20, right: 20, bottom: 40, left: 50 }}
      colors={["#82ca9d"]}
      axisBottom={{ tickSize: 5, tickPadding: 5 }}
      axisLeft={{ tickSize: 5, tickPadding: 5 }}
    />
  </div>
  )
}

export default BarChart
