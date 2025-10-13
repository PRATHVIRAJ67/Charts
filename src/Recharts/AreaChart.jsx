import AreaChartLib from "noteiqareachart";

const AreaChart = ({ data, width = 700, height = 300, areas, xKey }) => {
  return (
    <AreaChartLib
      data={data}
      xKey={xKey}        
      width={width}
      height={height}
      areas={areas}
      showTooltip={true} 
      showLegend={true}  
    />
  );
};

export default AreaChart;
