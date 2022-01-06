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
export default class SeaLevelsData extends Component {
	render() {
		return (
			// en container för diagrammet
			<ResponsiveContainer width="100%" height="100%">
				{/* ett linjediagram importerat från recharts */}
				{/* ihop kopplat med datan från API genom data={array name} */}
				<LineChart
					data={seaData}
					margin={{
						top: 0,
						right: 5,
						left: -20,
						bottom: -25,
					}}
				>
					{/* sätter linjer på diagrammet */}
					<CartesianGrid strokeDasharray="3 3" />
					{/* så att x-axeln visar time */}
					<XAxis dataKey="Time" />
					<YAxis />
					{/* lägger till en tooltip från recharts för att kunna visa exakta värden i linjegrafen på muspekaren */}
					<Tooltip />
					<Legend />
					{/* visar två (2) linjer som representerar varje data */}
					<Line
						type="monotone"
						dataKey="GMSL"
						stroke="black"
						strokeWidth={2}
						dot={false}
					/>
					<Line
						type="monotone"
						name="kumulativa förändringar"
						dataKey="GMSL uncertainty"
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
const seaData = [
	{ GMSL: -158.7, 'GMSL uncertainty': 24.2, Time: 1880 },
	{ GMSL: -153.1, 'GMSL uncertainty': 24.2, Time: 1881 },
	{ GMSL: -169.9, 'GMSL uncertainty': 23.0, Time: 1882 },
	{ GMSL: -164.6, 'GMSL uncertainty': 22.8, Time: 1883 },
	{ GMSL: -143.7, 'GMSL uncertainty': 22.2, Time: 1884 },
	{ GMSL: -145.2, 'GMSL uncertainty': 21.9, Time: 1885 },
	{ GMSL: -147.6, 'GMSL uncertainty': 20.8, Time: 1886 },
	{ GMSL: -153.2, 'GMSL uncertainty': 20.8, Time: 1887 },
	{ GMSL: -151.1, 'GMSL uncertainty': 20.8, Time: 1888 },
	{ GMSL: -149.5, 'GMSL uncertainty': 20.8, Time: 1889 },
	{ GMSL: -147.5, 'GMSL uncertainty': 20.7, Time: 1890 },
	{ GMSL: -149.2, 'GMSL uncertainty': 20.7, Time: 1891 },
	{ GMSL: -146.0, 'GMSL uncertainty': 20.7, Time: 1892 },
	{ GMSL: -141.3, 'GMSL uncertainty': 20.3, Time: 1893 },
	{ GMSL: -151.0, 'GMSL uncertainty': 21.6, Time: 1894 },
	{ GMSL: -139.2, 'GMSL uncertainty': 21.6, Time: 1895 },
	{ GMSL: -146.8, 'GMSL uncertainty': 21.2, Time: 1896 },
	{ GMSL: -141.6, 'GMSL uncertainty': 20.8, Time: 1897 },
	{ GMSL: -132.2, 'GMSL uncertainty': 19.7, Time: 1898 },
	{ GMSL: -124.7, 'GMSL uncertainty': 19.4, Time: 1899 },
	{ GMSL: -130.1, 'GMSL uncertainty': 18.3, Time: 1900 },
	{ GMSL: -130.5, 'GMSL uncertainty': 17.6, Time: 1901 },
	{ GMSL: -125.9, 'GMSL uncertainty': 17.3, Time: 1902 },
	{ GMSL: -117.9, 'GMSL uncertainty': 17.0, Time: 1903 },
	{ GMSL: -128.2, 'GMSL uncertainty': 16.9, Time: 1904 },
	{ GMSL: -133.7, 'GMSL uncertainty': 15.4, Time: 1905 },
	{ GMSL: -126.9, 'GMSL uncertainty': 14.7, Time: 1906 },
	{ GMSL: -128.3, 'GMSL uncertainty': 14.9, Time: 1907 },
	{ GMSL: -130.8, 'GMSL uncertainty': 14.5, Time: 1908 },
	{ GMSL: -126.3, 'GMSL uncertainty': 14.6, Time: 1909 },
	{ GMSL: -126.4, 'GMSL uncertainty': 14.6, Time: 1910 },
	{ GMSL: -118.1, 'GMSL uncertainty': 14.2, Time: 1911 },
	{ GMSL: -121.2, 'GMSL uncertainty': 14.2, Time: 1912 },
	{ GMSL: -119.4, 'GMSL uncertainty': 14.1, Time: 1913 },
	{ GMSL: -113.1, 'GMSL uncertainty': 13.8, Time: 1914 },
	{ GMSL: -105.2, 'GMSL uncertainty': 13.6, Time: 1915 },
	{ GMSL: -107.1, 'GMSL uncertainty': 13.0, Time: 1916 },
	{ GMSL: -111.6, 'GMSL uncertainty': 12.8, Time: 1917 },
	{ GMSL: -113.2, 'GMSL uncertainty': 12.7, Time: 1918 },
	{ GMSL: -111.6, 'GMSL uncertainty': 12.7, Time: 1919 },
	{ GMSL: -110.3, 'GMSL uncertainty': 13.0, Time: 1920 },
	{ GMSL: -108.2, 'GMSL uncertainty': 13.1, Time: 1921 },
	{ GMSL: -109.1, 'GMSL uncertainty': 13.2, Time: 1922 },
	{ GMSL: -107.9, 'GMSL uncertainty': 13.0, Time: 1923 },
	{ GMSL: -115.2, 'GMSL uncertainty': 13.1, Time: 1924 },
	{ GMSL: -113.2, 'GMSL uncertainty': 13.6, Time: 1925 },
	{ GMSL: -106.7, 'GMSL uncertainty': 13.7, Time: 1926 },
	{ GMSL: -107.8, 'GMSL uncertainty': 12.9, Time: 1927 },
	{ GMSL: -111.7, 'GMSL uncertainty': 12.3, Time: 1928 },
	{ GMSL: -110.3, 'GMSL uncertainty': 12.1, Time: 1929 },
	{ GMSL: -106.3, 'GMSL uncertainty': 12.0, Time: 1930 },
	{ GMSL: -106.7, 'GMSL uncertainty': 12.2, Time: 1931 },
	{ GMSL: -101.0, 'GMSL uncertainty': 11.9, Time: 1932 },
	{ GMSL: -96.7, 'GMSL uncertainty': 11.8, Time: 1933 },
	{ GMSL: -102.1, 'GMSL uncertainty': 11.9, Time: 1934 },
	{ GMSL: -96.5, 'GMSL uncertainty': 11.9, Time: 1935 },
	{ GMSL: -100.4, 'GMSL uncertainty': 11.8, Time: 1936 },
	{ GMSL: -94.7, 'GMSL uncertainty': 11.8, Time: 1937 },
	{ GMSL: -92.1, 'GMSL uncertainty': 11.8, Time: 1938 },
	{ GMSL: -86.9, 'GMSL uncertainty': 12.2, Time: 1939 },
	{ GMSL: -92.2, 'GMSL uncertainty': 11.1, Time: 1940 },
	{ GMSL: -80.0, 'GMSL uncertainty': 10.8, Time: 1941 },
	{ GMSL: -80.0, 'GMSL uncertainty': 10.8, Time: 1942 },
	{ GMSL: -80.0, 'GMSL uncertainty': 10.8, Time: 1943 },
	{ GMSL: -86.4, 'GMSL uncertainty': 10.7, Time: 1944 },
	{ GMSL: -83.6, 'GMSL uncertainty': 10.7, Time: 1945 },
	{ GMSL: -76.1, 'GMSL uncertainty': 10.6, Time: 1946 },
	{ GMSL: -73.0, 'GMSL uncertainty': 9.6, Time: 1947 },
	{ GMSL: -68.2, 'GMSL uncertainty': 9.3, Time: 1948 },
	{ GMSL: -69.5, 'GMSL uncertainty': 8.4, Time: 1949 },
	{ GMSL: -67.3, 'GMSL uncertainty': 7.9, Time: 1950 },
	{ GMSL: -57.8, 'GMSL uncertainty': 7.8, Time: 1951 },
	{ GMSL: -60.4, 'GMSL uncertainty': 7.7, Time: 1952 },
	{ GMSL: -56.0, 'GMSL uncertainty': 7.5, Time: 1953 },
	{ GMSL: -58.9, 'GMSL uncertainty': 7.3, Time: 1954 },
	{ GMSL: -58.0, 'GMSL uncertainty': 7.1, Time: 1955 },
	{ GMSL: -63.1, 'GMSL uncertainty': 7.0, Time: 1956 },
	{ GMSL: -49.7, 'GMSL uncertainty': 6.9, Time: 1957 },
	{ GMSL: -48.3, 'GMSL uncertainty': 6.6, Time: 1958 },
	{ GMSL: -48.0, 'GMSL uncertainty': 6.5, Time: 1959 },
	{ GMSL: -44.3, 'GMSL uncertainty': 6.6, Time: 1960 },
	{ GMSL: -38.1, 'GMSL uncertainty': 6.6, Time: 1961 },
	{ GMSL: -43.3, 'GMSL uncertainty': 6.6, Time: 1962 },
	{ GMSL: -44.9, 'GMSL uncertainty': 6.6, Time: 1963 },
	{ GMSL: -52.8, 'GMSL uncertainty': 6.7, Time: 1964 },
	{ GMSL: -41.6, 'GMSL uncertainty': 6.7, Time: 1965 },
	{ GMSL: -47.0, 'GMSL uncertainty': 6.6, Time: 1966 },
	{ GMSL: -45.6, 'GMSL uncertainty': 6.5, Time: 1967 },
	{ GMSL: -44.8, 'GMSL uncertainty': 6.7, Time: 1968 },
	{ GMSL: -38.0, 'GMSL uncertainty': 7.0, Time: 1969 },
	{ GMSL: -39.9, 'GMSL uncertainty': 7.0, Time: 1970 },
	{ GMSL: -34.7, 'GMSL uncertainty': 6.9, Time: 1971 },
	{ GMSL: -25.6, 'GMSL uncertainty': 6.9, Time: 1972 },
	{ GMSL: -31.6, 'GMSL uncertainty': 6.8, Time: 1973 },
	{ GMSL: -19.7, 'GMSL uncertainty': 6.8, Time: 1974 },
	{ GMSL: -21.3, 'GMSL uncertainty': 6.7, Time: 1975 },
	{ GMSL: -22.3, 'GMSL uncertainty': 6.8, Time: 1976 },
	{ GMSL: -24.0, 'GMSL uncertainty': 6.6, Time: 1977 },
	{ GMSL: -17.6, 'GMSL uncertainty': 6.7, Time: 1978 },
	{ GMSL: -22.5, 'GMSL uncertainty': 6.7, Time: 1979 },
	{ GMSL: -16.5, 'GMSL uncertainty': 6.5, Time: 1980 },
	{ GMSL: -4.1, 'GMSL uncertainty': 6.5, Time: 1981 },
	{ GMSL: -9.9, 'GMSL uncertainty': 6.3, Time: 1982 },
	{ GMSL: -1.5, 'GMSL uncertainty': 6.5, Time: 1983 },
	{ GMSL: -2.4, 'GMSL uncertainty': 6.3, Time: 1984 },
	{ GMSL: -12.7, 'GMSL uncertainty': 6.3, Time: 1985 },
	{ GMSL: -12.1, 'GMSL uncertainty': 6.3, Time: 1986 },
	{ GMSL: -11.5, 'GMSL uncertainty': 6.2, Time: 1987 },
	{ GMSL: -6.8, 'GMSL uncertainty': 6.3, Time: 1988 },
	{ GMSL: -2.3, 'GMSL uncertainty': 6.4, Time: 1989 },
	{ GMSL: 0.0, 'GMSL uncertainty': 6.5, Time: 1990 },
	{ GMSL: 2.5, 'GMSL uncertainty': 6.5, Time: 1991 },
	{ GMSL: 3.2, 'GMSL uncertainty': 6.6, Time: 1992 },
	{ GMSL: 1.4, 'GMSL uncertainty': 6.6, Time: 1993 },
	{ GMSL: 6.6, 'GMSL uncertainty': 6.6, Time: 1994 },
	{ GMSL: 9.5, 'GMSL uncertainty': 6.6, Time: 1995 },
	{ GMSL: 13.6, 'GMSL uncertainty': 6.6, Time: 1996 },
	{ GMSL: 20.6, 'GMSL uncertainty': 6.6, Time: 1997 },
	{ GMSL: 10.7, 'GMSL uncertainty': 6.8, Time: 1998 },
	{ GMSL: 19.2, 'GMSL uncertainty': 6.8, Time: 1999 },
	{ GMSL: 20.5, 'GMSL uncertainty': 6.8, Time: 2000 },
	{ GMSL: 26.0, 'GMSL uncertainty': 6.7, Time: 2001 },
	{ GMSL: 28.4, 'GMSL uncertainty': 6.8, Time: 2002 },
	{ GMSL: 37.6, 'GMSL uncertainty': 6.9, Time: 2003 },
	{ GMSL: 37.2, 'GMSL uncertainty': 6.9, Time: 2004 },
	{ GMSL: 37.3, 'GMSL uncertainty': 6.8, Time: 2005 },
	{ GMSL: 41.6, 'GMSL uncertainty': 6.8, Time: 2006 },
	{ GMSL: 43.5, 'GMSL uncertainty': 7.1, Time: 2007 },
	{ GMSL: 52.2, 'GMSL uncertainty': 6.8, Time: 2008 },
	{ GMSL: 58.0, 'GMSL uncertainty': 6.9, Time: 2009 },
	{ GMSL: 65.7, 'GMSL uncertainty': 7.1, Time: 2010 },
	{ GMSL: 67.3, 'GMSL uncertainty': 7.5, Time: 2011 },
	{ GMSL: 76.1, 'GMSL uncertainty': 8.3, Time: 2012 },
	{ GMSL: 67.7, 'GMSL uncertainty': 8.9, Time: 2013 },
];
