import AreaChartLib from "noteiqareachart";

const AreaChart = ({ data, width = 700, height = 300, areas, xKey }) => {
  return (
    <AreaChartLib
      data={data}
      xKey={xKey}        // make xKey dynamic
      width={width}
      height={height}
      areas={areas}
      showTooltip={true} // optional, for better UX
      showLegend={true}  
    />
  );
};

export default AreaChart;
