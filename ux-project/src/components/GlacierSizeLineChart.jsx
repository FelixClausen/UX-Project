// react + komponenter från recharts
import React, { Component } from 'react';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
	CartesianGrid,
} from 'recharts';

// en class komponent för att visa diagrammet
export default class GlacierSizeData extends Component {
	render() {
		return (
			// en container för diagrammet
			<ResponsiveContainer width="100%" height="100%">
				{/* ett linjediagram importerat från recharts */}
				{/* ihop kopplat med datan från API genom data={array name} */}
				<LineChart
					data={glacierData}
					margin={{
						top: 0,
						right: 5,
						left: -20,
						bottom: -25,
					}}
				>
					{/* sätter linjer på diagrammet */}
					<CartesianGrid strokeDasharray="3 3" />
					{/* så att x-axeln visar year */}
					<XAxis dataKey="Year" />
					<YAxis />
					{/* lägger till en tooltip från recharts för att kunna visa exakta värden i linjegrafen på muspekaren */}
					<Tooltip />
					<Legend />
					{/* visar två linjer som representerar varje data */}
					<Line
						type="monotone"
						name="Genomsnittlig kumulativ massbalans"
						dataKey="Mean cumulative mass balance"
						stroke="black"
						strokeWidth={2}
						dot={false}
					/>
					<Line
						type="monotone"
						name="Antal observationer"
						dataKey="Number of observations"
						stroke="green"
						strokeWidth={2}
						dot={false}
					/>
				</LineChart>
			</ResponsiveContainer>
		);
	}
}

// en array med all data från API
const glacierData = [
	{
		'Mean cumulative mass balance': 0.0,
		'Number of observations': null,
		Year: 1945,
	},
	{
		'Mean cumulative mass balance': -1.13,
		'Number of observations': 1.0,
		Year: 1946,
	},
	{
		'Mean cumulative mass balance': -3.19,
		'Number of observations': 1.0,
		Year: 1947,
	},
	{
		'Mean cumulative mass balance': -3.19,
		'Number of observations': 1.0,
		Year: 1948,
	},
	{
		'Mean cumulative mass balance': -3.82,
		'Number of observations': 3.0,
		Year: 1949,
	},
	{
		'Mean cumulative mass balance': -4.887,
		'Number of observations': 3.0,
		Year: 1950,
	},
	{
		'Mean cumulative mass balance': -5.217,
		'Number of observations': 3.0,
		Year: 1951,
	},
	{
		'Mean cumulative mass balance': -5.707,
		'Number of observations': 3.0,
		Year: 1952,
	},
	{
		'Mean cumulative mass balance': -6.341,
		'Number of observations': 7.0,
		Year: 1953,
	},
	{
		'Mean cumulative mass balance': -6.825,
		'Number of observations': 6.0,
		Year: 1954,
	},
	{
		'Mean cumulative mass balance': -6.575,
		'Number of observations': 7.0,
		Year: 1955,
	},
	{
		'Mean cumulative mass balance': -6.814,
		'Number of observations': 7.0,
		Year: 1956,
	},
	{
		'Mean cumulative mass balance': -6.989,
		'Number of observations': 9.0,
		Year: 1957,
	},
	{
		'Mean cumulative mass balance': -7.693,
		'Number of observations': 9.0,
		Year: 1958,
	},
	{
		'Mean cumulative mass balance': -8.325,
		'Number of observations': 11.0,
		Year: 1959,
	},
	{
		'Mean cumulative mass balance': -8.688,
		'Number of observations': 14.0,
		Year: 1960,
	},
	{
		'Mean cumulative mass balance': -8.935,
		'Number of observations': 15.0,
		Year: 1961,
	},
	{
		'Mean cumulative mass balance': -9.109,
		'Number of observations': 20.0,
		Year: 1962,
	},
	{
		'Mean cumulative mass balance': -9.567,
		'Number of observations': 22.0,
		Year: 1963,
	},
	{
		'Mean cumulative mass balance': -9.699,
		'Number of observations': 22.0,
		Year: 1964,
	},
	{
		'Mean cumulative mass balance': -9.298,
		'Number of observations': 24.0,
		Year: 1965,
	},
	{
		'Mean cumulative mass balance': -9.436,
		'Number of observations': 27.0,
		Year: 1966,
	},
	{
		'Mean cumulative mass balance': -9.303,
		'Number of observations': 29.0,
		Year: 1967,
	},
	{
		'Mean cumulative mass balance': -9.219,
		'Number of observations': 31.0,
		Year: 1968,
	},
	{
		'Mean cumulative mass balance': -9.732,
		'Number of observations': 31.0,
		Year: 1969,
	},
	{
		'Mean cumulative mass balance': -10.128,
		'Number of observations': 32.0,
		Year: 1970,
	},
	{
		'Mean cumulative mass balance': -10.288,
		'Number of observations': 32.0,
		Year: 1971,
	},
	{
		'Mean cumulative mass balance': -10.441,
		'Number of observations': 32.0,
		Year: 1972,
	},
	{
		'Mean cumulative mass balance': -10.538,
		'Number of observations': 32.0,
		Year: 1973,
	},
	{
		'Mean cumulative mass balance': -10.613,
		'Number of observations': 32.0,
		Year: 1974,
	},
	{
		'Mean cumulative mass balance': -10.534,
		'Number of observations': 33.0,
		Year: 1975,
	},
	{
		'Mean cumulative mass balance': -10.633,
		'Number of observations': 35.0,
		Year: 1976,
	},
	{
		'Mean cumulative mass balance': -10.682,
		'Number of observations': 37.0,
		Year: 1977,
	},
	{
		'Mean cumulative mass balance': -10.754,
		'Number of observations': 37.0,
		Year: 1978,
	},
	{
		'Mean cumulative mass balance': -11.127,
		'Number of observations': 37.0,
		Year: 1979,
	},
	{
		'Mean cumulative mass balance': -11.318,
		'Number of observations': 36.0,
		Year: 1980,
	},
	{
		'Mean cumulative mass balance': -11.394,
		'Number of observations': 35.0,
		Year: 1981,
	},
	{
		'Mean cumulative mass balance': -11.849,
		'Number of observations': 36.0,
		Year: 1982,
	},
	{
		'Mean cumulative mass balance': -11.846,
		'Number of observations': 37.0,
		Year: 1983,
	},
	{
		'Mean cumulative mass balance': -11.902,
		'Number of observations': 37.0,
		Year: 1984,
	},
	{
		'Mean cumulative mass balance': -12.238,
		'Number of observations': 37.0,
		Year: 1985,
	},
	{
		'Mean cumulative mass balance': -12.782,
		'Number of observations': 37.0,
		Year: 1986,
	},
	{
		'Mean cumulative mass balance': -12.795,
		'Number of observations': 37.0,
		Year: 1987,
	},
	{
		'Mean cumulative mass balance': -13.26,
		'Number of observations': 37.0,
		Year: 1988,
	},
	{
		'Mean cumulative mass balance': -13.343,
		'Number of observations': 37.0,
		Year: 1989,
	},
	{
		'Mean cumulative mass balance': -13.687,
		'Number of observations': 37.0,
		Year: 1990,
	},
	{
		'Mean cumulative mass balance': -14.255,
		'Number of observations': 37.0,
		Year: 1991,
	},
	{
		'Mean cumulative mass balance': -14.501,
		'Number of observations': 36.0,
		Year: 1992,
	},
	{
		'Mean cumulative mass balance': -14.695,
		'Number of observations': 37.0,
		Year: 1993,
	},
	{
		'Mean cumulative mass balance': -15.276,
		'Number of observations': 37.0,
		Year: 1994,
	},
	{
		'Mean cumulative mass balance': -15.486,
		'Number of observations': 37.0,
		Year: 1995,
	},
	{
		'Mean cumulative mass balance': -15.89,
		'Number of observations': 37.0,
		Year: 1996,
	},
	{
		'Mean cumulative mass balance': -16.487,
		'Number of observations': 37.0,
		Year: 1997,
	},
	{
		'Mean cumulative mass balance': -17.31,
		'Number of observations': 37.0,
		Year: 1998,
	},
	{
		'Mean cumulative mass balance': -17.697,
		'Number of observations': 37.0,
		Year: 1999,
	},
	{
		'Mean cumulative mass balance': -17.727,
		'Number of observations': 37.0,
		Year: 2000,
	},
	{
		'Mean cumulative mass balance': -18.032,
		'Number of observations': 37.0,
		Year: 2001,
	},
	{
		'Mean cumulative mass balance': -18.726,
		'Number of observations': 37.0,
		Year: 2002,
	},
	{
		'Mean cumulative mass balance': -19.984,
		'Number of observations': 37.0,
		Year: 2003,
	},
	{
		'Mean cumulative mass balance': -20.703,
		'Number of observations': 37.0,
		Year: 2004,
	},
	{
		'Mean cumulative mass balance': -21.405,
		'Number of observations': 37.0,
		Year: 2005,
	},
	{
		'Mean cumulative mass balance': -22.595,
		'Number of observations': 37.0,
		Year: 2006,
	},
	{
		'Mean cumulative mass balance': -23.255,
		'Number of observations': 37.0,
		Year: 2007,
	},
	{
		'Mean cumulative mass balance': -23.776,
		'Number of observations': 37.0,
		Year: 2008,
	},
	{
		'Mean cumulative mass balance': -24.459,
		'Number of observations': 37.0,
		Year: 2009,
	},
	{
		'Mean cumulative mass balance': -25.158,
		'Number of observations': 37.0,
		Year: 2010,
	},
	{
		'Mean cumulative mass balance': -26.294,
		'Number of observations': 37.0,
		Year: 2011,
	},
	{
		'Mean cumulative mass balance': -26.93,
		'Number of observations': 36.0,
		Year: 2012,
	},
	{
		'Mean cumulative mass balance': -27.817,
		'Number of observations': 31.0,
		Year: 2013,
	},
	{
		'Mean cumulative mass balance': -28.652,
		'Number of observations': 24.0,
		Year: 2014,
	},
];
