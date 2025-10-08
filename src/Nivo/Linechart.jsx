import React from 'react'
import { ResponsiveLine } from '@nivo/line';

const data = [
  {
    id: "Series 1",
    data: [
      { x: "Jan", y: 400 },
      { x: "Feb", y: 300 },
      { x: "Mar", y: 200 },
      { x: "Apr", y: 278 },
      { x: "May", y: 189 }
    ]
  }
];
const Linechart = () => {
  return (
     <div style={{ height: 250 }}>
    <ResponsiveLine
      data={data}
      margin={{ top: 20, right: 20, bottom: 40, left: 50 }}
      xScale={{ type: "point" }}
      yScale={{ type: "linear", min: 0, max: "auto" }}
      axisBottom={{ orient: 'bottom' }}
      axisLeft={{ orient: 'left' }}
      colors={["#ff7300"]}
      pointSize={6}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      useMesh={true}
    />
  </div>
  )
}

export default Linechart
