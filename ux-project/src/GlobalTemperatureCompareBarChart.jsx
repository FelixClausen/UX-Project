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
const GlobalTemperatureCompareBarChart = (props) => {
  // runs handleYear based on "Enter" key pressed + value
  const handleYear = e => {
    if (e.key === "Enter") {
      props.onYearFilter(props.chartName, e.target.value);
      //console.log(e.target.value)
    }
  };

  // sets Co2Emission to co2
  let gt = props.GlobaltemperatureEmission;
  // if data is undefined, show error message
  if (gt === undefined) return <p>There is no data.</p>;

  //object array
  /*
  vi har problem här, den hämtar bara ett årtal.
  Detta gör att den skriver ut samma värde för "Mean", den ska skriva ut både GCAG och GISTEMP.
  */
  const GTdataBarChart = [
    { name: "GCAG", GT: gt["Mean"] },
    { name: "GISTEMP", GT: gt["Mean"] }
  ];

  // sets some colors, they are used later as Cell-fill
  const COLORS = ["#0088FE", "#00C49F"];

  // returns a div to show the graphs
  return (
    <div className="barBox">
      <div>
        <input
        type="text"
        placeholder="1999"
        onKeyDown={e => handleYear(e)}
        />
        <button>Jämför</button>
      </div>

      <BarChart
        width={400}
        height={300}
        data={GTdataBarChart}
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

        <Bar dataKey="GT" fill="#8884d8">
          <Cell fill={COLORS[0]} />)
          <Cell fill={COLORS[1]} />)
        </Bar>
      </BarChart>
    </div>
  );
}


export default GlobalTemperatureCompareBarChart;