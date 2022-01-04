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
const SeaLevelCompareBarChart = (props) => {
  // runs handleYear based on "Enter" key pressed + value
  const handleTime = e => {
    if (e.key === "Enter") {
      props.onTimeFilter(props.chartName, e.target.value);
    }
  };

  // sets Co2Emission to co2
  let sl = props.SeaLevelEmission;
  // if data is undefined, show error message
  if (sl === undefined) return <p>There is no data.</p>;

  //object array
  const SLdataBarChart = [
    { name: "GMSL", SL: sl["GMSL"] },
    { name: "kumulativa förändringar", SL: sl["GMSL uncertainty"] },
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
        onKeyDown={e => handleTime(e)}
        />
        <button>Jämför</button>
      </div>

      <BarChart
        width={400}
        height={300}
        data={SLdataBarChart}
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

        <Bar dataKey="SL" fill="#8884d8">
          <Cell fill={COLORS[0]} />)
          <Cell fill={COLORS[1]} />)
        </Bar>
      </BarChart>
    </div>
  );
}


export default SeaLevelCompareBarChart;