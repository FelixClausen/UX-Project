// react + components from recharts
import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

// compare data function
const MyBarChart = (props) => {
  // runs handleYear based on "Enter" key pressed + value
  const handleYear = e => {
    if (e.key === "Enter") {
      props.onYearFilter(props.chartName, e.target.value);
    }
  };

  // sets Co2Emission to co2
  let co2 = props.Co2Emission;
  // if data is undefined, show error message
  if (co2 === undefined) return <p>There is no data.</p>;

  //object array
  const dataBarChart = [
    { name: "Gas", CO2: parseInt(co2["Gas Fuel"]) },
    { name: "Liq", CO2: co2["Liquid Fuel"] },
    { name: "Sol", CO2: co2["Solid Fuel"] },
    { name: "Cem", CO2: co2["Cement"] }
  ];

  // sets some colors, they are used later as Cell-color
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#BB8042"];

  // returns a div to show the graphs
  return (
    <div className="barBox">
      <div>
        <input
        type="text"
        placeholder="Year..."
        onKeyDown={e => handleYear(e)}
      />
      <button onclick={e => handleYear(e)}>Search</button>

      </div>


      <BarChart
        width={400}
        height={300}
        data={dataBarChart}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Bar dataKey="CO2" fill="#8884d8">
          <Cell fill={COLORS[0]} />)
          <Cell fill={COLORS[1]} />)
          <Cell fill={COLORS[2]} />)
          <Cell fill={COLORS[3]} />)
          <Cell fill={COLORS[4]} />)
        </Bar>
      </BarChart>
    </div>
  );
}


export default MyBarChart