import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const data = [
  { id: 'Group A', value: 400 },
  { id: 'Group B', value: 300 },
  { id: 'Group C', value: 300 },
  { id: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChart = () => {
  return (
    <div style={{ height: 250 }}>
      <ResponsivePie
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        innerRadius={0}              // full pie, set >0 for donut
        padAngle={0}                 // spacing between slices
        cornerRadius={0}             // slice edges
        colors={COLORS}              // custom colors
        enableArcLinkLabels={false}  // hide link labels
        enableSlicesLabels={true}    // show slice labels
        tooltip={({ datum }) => `${datum.id}: ${datum.value}`} // simple tooltip
      />
    </div>
  );
};

export default PieChart;
