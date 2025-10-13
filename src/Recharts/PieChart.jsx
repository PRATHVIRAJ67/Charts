import PieChartLib from "noteiqpiechart";

const PieChart = ({ data, colors, pies, showTooltip = true }) => {
  return (
    <PieChartLib
      data={data}
      colors={colors}
      pies={pies}
      showTooltip={showTooltip}
      showLegend={true}          
      legend={{                 
        position: "bottom",   
        layout: "horizontal",    
        align: "center"          
      }}
    />
  );
};

export default PieChart;
