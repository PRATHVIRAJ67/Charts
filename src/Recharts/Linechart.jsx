import LineChartLib from "noteiqlinechart";

const Linechart = ({ data, xKey = "name", width = 700, height = 300, lines }) => {
  return (
    <LineChartLib
      data={data}
      xKey={xKey}      // now dynamic
      width={width}
      height={height}
      lines={lines}
      showTooltip={true}  // optional, for better UX
      showLegend={true}   // optional, for better UX
    />
  );
};

export default Linechart;
