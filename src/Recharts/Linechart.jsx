import LineChartLib from "noteiqlinechart";

const Linechart = ({ data, xKey = "name", width = 700, height = 300, lines }) => {
  return (
    <LineChartLib
      data={data}
      xKey={xKey}    
      width={width}
      height={height}
      lines={lines}
      showTooltip={true} 
      showLegend={true}   
    />
  );
};

export default Linechart;
