import AreaChart from "./AreaChart";
import BarChart from "./BarChart";
import Linechart from "./Linechart";
import PieChart from "./PieChart";
import "./Recharts.css";
import SimpleTable from "./Table";

const areaData1 = [
  { month: "Jan", visitors: 12000 },
  { month: "Feb", visitors: 15000 },
  { month: "Mar", visitors: 20000 },
  { month: "Apr", visitors: 18000 },
];

const areaData2 = [
  { region: "North", organic: 8000, paid: 4000 },
  { region: "South", organic: 9000, paid: 4500 },
  { region: "East", organic: 12000, paid: 8000 },
  { region: "West", organic: 11000, paid: 16600 },
];

const barData1 = [
  { product: "Laptop", sales: 1200, profit: 300, other: 200 },
  { product: "Smartphone", sales: 900, profit: 200, other: 250 },
  { product: "Tablet", sales: 600, profit: 150, other: 470 },
  { product: "Headphones", sales: 400, profit: 100, other: 430 },
];

const barData2 = [
  { employee: "Alice", tasks: 25, hours: 120 },
  { employee: "Bob", tasks: 30, hours: 140 },
  { employee: "Charlie", tasks: 20, hours: 100 },
  { employee: "Diana", tasks: 35, hours: 160 },
];

const lineData1 = [
  { city: "New York", visitors: 1200 },
  { city: "Los Angeles", visitors: 1500 },
  { city: "Chicago", visitors: 1700 },
  { city: "Houston", visitors: 1400 },
  { city: "Miami", visitors: 1600 },
];

const lineData2 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const pieData1 = [
  { department: "Engineering", employees: 120 },
  { department: "Marketing", employees: 80 },
  { department: "Sales", employees: 60 },
  { department: "HR", employees: 40 },
];

const pieData2 = [
  { name: "Group E", value: 150 },
  { name: "Group F", value: 250 },
  { name: "Group G", value: 100 },
  { name: "Group H", value: 200 },
  { name: "Group J", value: 300 },
];

const COLORS1 = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const COLORS2 = ["#8884D8", "#82CA9D", "#FFC658", "#f59090ff", "#0088FE"];

const Recharts = () => {
  return (
    <div>
      <div className="chart-grid">
        <div className="chart-item">
          <AreaChart
            data={areaData1}
            xKey="month"
            areas={[
              {
                dataKey: "visitors",
                stroke: "#4F46E5",
                fill: "#A5B4FC",
                type: "monotone",
              },
              {
                dataKey: "conversions",
                stroke: "#EF4444",
                fill: "#de0000ff",
                type: "monotone",
              },
            ]}
          />
        </div>

        <div className="chart-item">
          <AreaChart
            data={areaData2}
            xKey="region"
            areas={[
              {
                dataKey: "organic",
                stroke: "#22C55E",
                fill: "#86EFAC",
                type: "monotone",
              },
              {
                dataKey: "paid",
                stroke: "#F97316",
                fill: "#FDBA74",
                type: "monotone",
              },
            ]}
          />
        </div>

        <div className="chart-item">
          <BarChart
            data={barData1}
            xKey="product"
            bars={[
              { dataKey: "sales", fill: "#3B82F6" },
              { dataKey: "profit", fill: "#EF4444" },
              { dataKey: "other", fill: "#10B981" },
            ]}
          />
        </div>

        <div className="chart-item">
          <BarChart
            data={barData2}
            xKey="employee"
            bars={[
              { dataKey: "tasks", fill: "#10B981" },
              { dataKey: "hours", fill: "#F59E0B" },
            ]}
          />
        </div>

        <div className="chart-item">
          <Linechart
            data={lineData1}
            xKey="city"
            lines={[
              { dataKey: "visitors", stroke: "#9333EA", type: "monotone" },
            ]}
          />
        </div>

        <div className="chart-item">
          <Linechart
            data={lineData2}
            xKey="name"
            lines={[
              { dataKey: "value", stroke: "#06B6D4", type: "monotone" },
            ]}
          />
        </div>

        <div className="chart-item">
          <PieChart
            data={pieData1}
            colors={COLORS1}
            pies={[
              {
                dataKey: "employees",
                nameKey: "department",
                outerRadius: 100,
              },
            ]}
          />
        </div>

        <div className="chart-item">
          <PieChart
            data={pieData2}
            colors={COLORS2}
            pies={[
              { dataKey: "value", nameKey: "name", outerRadius: 100 },
            ]}
          />
        </div>
      </div>

   
      {/* <SimpleTable /> */}
    </div>
  );
};

export default Recharts;
