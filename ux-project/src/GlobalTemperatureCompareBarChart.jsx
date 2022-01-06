// react + components from recharts
import React from 'react';
import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	Tooltip,
	CartesianGrid,
} from 'recharts';

// funktion för att jämföra årtal
const GlobalTemperatureCompareBarChart = (props) => {
	// runs handleYear based on "Enter" key pressed + value
	const handleYear = (e) => {
		if (e.key === 'Enter') {
			props.onYearFilter(props.chartName, e.target.value);
			//console.log(e.target.value)
		}
	};

	// sets Co2Emission to co2
	let gt = props.GlobaltemperatureEmission;
	// om datan är undifined visas ett felmeddelande
	if (gt === undefined) return <p>There is no data.</p>;

	//object array
	/*
  vi har problem här, den hämtar bara ett årtal.
  Detta gör att den skriver ut samma värde för "Mean", den ska skriva ut både GCAG och GISTEMP.
  */
	// objektet är kopplat till GCAG
	const GTdataBarChart = [
		{ name: 'GCAG', GT: gt['Mean'] },
		//{ name: 'GISTEMP', GT: gt['Mean'] },
	];

	// identifierar lite färger för att använda dem senare på staplarnas färg, enbart två eftersom det bara är två bars
	const COLORS = ['#0088FE', '#00C49F'];

	return (
		// en container komponent
		<div className="barBox">
			<div>
				{/* använder en input för att kunna skriva årtalet */}
				<input
					type="text"
					placeholder="1999"
					onKeyDown={(e) => handleYear(e)}
				/>
				{/* vid klick på knappen ska årtal hittas */}
				<button>Jämför</button>
			</div>
			{/* användaren barChart från recharts,
          kopplat till rätt data genom GTdataBarChart */}
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
				{/* rutnät */}
				<CartesianGrid strokeDasharray="3 3" />
				{/* x-axeln visar namnet på datan */}
				<XAxis dataKey="name" />
				<YAxis />
				{/* använder en tooltip för att kunna se exakta värdet i grafen på muspekaren */}
				<Tooltip />
				{/* bar är själva stapeln,
            fylld med färgerna ovan */}
				<Bar dataKey="GT" fill="#8884d8">
					<Cell fill={COLORS[0]} />)
					<Cell fill={COLORS[1]} />)
				</Bar>
			</BarChart>
		</div>
	);
};

export default GlobalTemperatureCompareBarChart;
