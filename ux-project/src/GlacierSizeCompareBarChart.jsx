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
const GlacierSizeCompareBarChart = (props) => {
  // runs handleYear based on "Enter" key pressed + value
  const handleYear = e => {
    if (e.key === "Enter") {
      props.onYearFilter(props.chartName, e.target.value);
    }
  };

  // sets Co2Emission to co2
  let gl = props.GlacierSizeEmission;
  // if data is undefined, show error message
  if (gl === undefined) return <p>There is no data.</p>;

  //object array
  const GLdataBarChart = [
    { name: "Mean cumulative mass balance", GL: gl["Mean cumulative mass balance"] },
    { name: "Number of observations", GL: gl["Number of observations"] },
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
        data={GLdataBarChart}
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

        <Bar dataKey="GL" fill="#8884d8">
          <Cell fill={COLORS[0]} />)
          <Cell fill={COLORS[1]} />)
        </Bar>
      </BarChart>
    </div>
  );
}


export default GlacierSizeCompareBarChart;