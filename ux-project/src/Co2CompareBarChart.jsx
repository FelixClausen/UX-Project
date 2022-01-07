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
const CompareBarChart = (props) => {
	// handleYear hämtar värdet som finns i input för att sedan filtera och hitta rätt årtal
	// handleYear körs sedan när input ändras
	function handleYear(e) {
		props.onYearFilter(props.chartName, e.target.value);
	}

	// identifierar datan
	let co2 = props.Co2Emission;
	// om datan är undifined visas ett felmeddelande istället för barChart
	if (co2 === undefined) return <p>There is no data.</p>;

	//object array
	// varje objekt är kopplat till de fyra (4) olika värdena
	const dataBarChart = [
		{ name: 'Gasbränsle', CO2: co2['Gas Fuel'] },
		{ name: 'Flytande bränsle', CO2: co2['Liquid Fuel'] },
		{ name: 'Fast bränsle', CO2: co2['Solid Fuel'] },
		{ name: 'Cement', CO2: co2['Cement'] },
	];

	// identifierar lite färger för att använda dem senare på staplarnas färg,
	// 4 olika eftersom det är fyra bars
	const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#BB8042'];

	// returns a div to show the graphs
	return (
		// en container komponent
		<div className="barBox">
			<div>
				{/* använder en input för att kunna skriva årtalet
				    kör funktionen handleYear.
					maxlength används för att minimera fel användaren kan göra */}
				<input
					min="1882"
					type="text"
					placeholder="1999"
					maxLength="4"
					pattern="\d{4}"
					required
					onChange={(e) => handleYear(e)}
				/>
			</div>
			{/* användaren barChart från recharts,
          kopplat till rätt data genom GLdataBarChart */}
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
				{/* rutnät */}
				<CartesianGrid strokeDasharray="3 3" />
				{/* x-axeln visar namnet på datan */}
				<XAxis dataKey="name" />
				<YAxis />
				{/* använder en tooltip för att kunna se exakta värdet i grafen på muspekaren */}
				<Tooltip />
				{/* bar är själva stapeln,
            fylld med färgerna ovan */}
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
};

export default CompareBarChart;
