import BarChartLib from "noteiqbarchart";

const BarChart = ({ data, xKey = "month", width = 700, height = 300, bars }) => {
  return (
    <BarChartLib
      data={data}
      xKey={xKey}  
      width={width}
      height={height}
      bars={bars}
       showTooltip={true}  
      showLegend={true}  
    />
  );
};

export default BarChart;
