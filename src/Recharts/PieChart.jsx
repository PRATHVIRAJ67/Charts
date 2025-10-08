import PieChartLib from "noteiqpiechart";

const PieChart = ({ data, colors, pies, showTooltip = true }) => {
  return (
    <PieChartLib
      data={data}
      colors={colors}
      pies={pies}
      showTooltip={showTooltip}
      showLegend={true}          // enable legend
      legend={{                  // move legend below
        position: "bottom",      // try "bottom" or "top"
        layout: "horizontal",    // make it horizontal
        align: "center"          // center align
      }}
    />
  );
};

export default PieChart;
