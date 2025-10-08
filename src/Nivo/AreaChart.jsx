import React from 'react'
import { ResponsiveAreaBump } from '@nivo/bump'; // Nivo doesn’t have a direct Area chart, we can use ResponsiveLine for area-like chart
import { ResponsiveLine } from '@nivo/line';

const AreaChart = () => {
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
  return (
     <div style={{ height: 250 }}>
    <ResponsiveLine
      data={data}
      margin={{ top: 20, right: 20, bottom: 40, left: 50 }}
      xScale={{ type: "point" }}
      yScale={{ type: "linear", min: 0, max: "auto" }}
    //   axisBottom={{ orient: 'bottom' }}
    //   axisLeft={{ orient: 'bottom' }}
      colors={["#8884d8"]}
      enableArea={true}
      areaOpacity={0.3}
      enablePoints={true}
           useMesh={true}
    />
  </div>
);
  
}

export default AreaChart
