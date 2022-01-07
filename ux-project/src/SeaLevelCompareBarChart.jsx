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

/*
const handleTime = (e) => {
		if (e.key === 'Enter') {
			props.onTimeFilter(props.chartName, e.target.value);
		}
	};
*/

// funktion för att jämföra årtal
const SeaLevelCompareBarChart = (props) => {
	// handleTime hämtar värdet som finns i input för att sedan filtera och hitta rätt årtal
	// handleTime körs sedan när input ändras
	function handleTime(e) {
		props.onTimeFilter(props.chartName, e.target.value);
	}

	// identifierar datan
	let sl = props.SeaLevelEmission;
	// om datan är undifined visas ett felmeddelande istället för barChart
	if (sl === undefined) return <p>There is no data.</p>;

	//object array
	// det första objektet är kopplat till GMSL
	// det andra objektet är kopplat till kumulativa förändringar
	const SLdataBarChart = [
		{ name: 'GMSL', SL: sl['GMSL'] },
		{ name: 'kumulativa förändringar', SL: sl['GMSL uncertainty'] },
	];

	// identifierar lite färger för att använda dem senare på staplarnas färg, enbart två eftersom det bara är två bars
	const COLORS = ['#0088FE', '#00C49F'];

	// returns a div to show the graphs
	return (
		// en container komponent
		<div className="barBox">
			<div>
				{/* använder en input för att kunna skriva årtalet
				    kör funktionen handleTime.
					maxlength används för att minimera fel användaren kan göra */}
				<input
					min="1882"
					type="text"
					placeholder="1999"
					maxLength="4"
					pattern="\d{4}"
					required
					onChange={(e) => handleTime(e)}
				/>
				{/* vid klick på knappen ska årtal hittas */}
			</div>
			{/* användaren barChart från recharts,
                kopplat till rätt data genom GLdataBarChart */}
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
				{/* rutnät */}
				<CartesianGrid strokeDasharray="3 3" />
				{/* x-axeln visar namnet på datan */}
				<XAxis dataKey="name" />
				<YAxis />
				{/* använder en tooltip för att kunna se exakta värdet i grafen på muspekaren */}
				<Tooltip />
				{/* bar är själva stapeln,
                    fylld med färgerna ovan */}
				<Bar dataKey="SL" fill="#8884d8">
					<Cell fill={COLORS[0]} />)
					<Cell fill={COLORS[1]} />)
				</Bar>
			</BarChart>
		</div>
	);
};

export default SeaLevelCompareBarChart;
