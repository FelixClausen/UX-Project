import React, { Component } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';

export default class SeaLevels extends Component {
  //static demoUrl = 'https://my.api.mockaroo.com/temp.json?key=8eb9e6f0';
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={x}
          margin={{
            top: 0,
            right: 5,
            left: -20,
            bottom: -25,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="GMSL" stroke="black" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="GMSL uncertainty" stroke="green" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

const x = [
  {"GMSL": -158.7, "GMSL uncertainty": 24.2, "Time": "1880-03-15"},
  {"GMSL": -153.1, "GMSL uncertainty": 24.2, "Time": "1881-03-15"},
  {"GMSL": -169.9, "GMSL uncertainty": 23.0, "Time": "1882-03-15"},
  {"GMSL": -164.6, "GMSL uncertainty": 22.8, "Time": "1883-03-15"},
  {"GMSL": -143.7, "GMSL uncertainty": 22.2, "Time": "1884-03-15"},
  {"GMSL": -145.2, "GMSL uncertainty": 21.9, "Time": "1885-03-15"},
  {"GMSL": -147.6, "GMSL uncertainty": 20.8, "Time": "1886-03-15"},
  {"GMSL": -153.2, "GMSL uncertainty": 20.8, "Time": "1887-03-15"},
  {"GMSL": -151.1, "GMSL uncertainty": 20.8, "Time": "1888-03-15"},
  {"GMSL": -149.5, "GMSL uncertainty": 20.8, "Time": "1889-03-15"},
  {"GMSL": -147.5, "GMSL uncertainty": 20.7, "Time": "1890-03-15"},
  {"GMSL": -149.2, "GMSL uncertainty": 20.7, "Time": "1891-03-15"},
  {"GMSL": -146.0, "GMSL uncertainty": 20.7, "Time": "1892-03-15"},
  {"GMSL": -141.3, "GMSL uncertainty": 20.3, "Time": "1893-03-15"},
  {"GMSL": -151.0, "GMSL uncertainty": 21.6, "Time": "1894-03-15"},
  {"GMSL": -139.2, "GMSL uncertainty": 21.6, "Time": "1895-03-15"},
  {"GMSL": -146.8, "GMSL uncertainty": 21.2, "Time": "1896-03-15"},
  {"GMSL": -141.6, "GMSL uncertainty": 20.8, "Time": "1897-03-15"},
  {"GMSL": -132.2, "GMSL uncertainty": 19.7, "Time": "1898-03-15"},
  {"GMSL": -124.7, "GMSL uncertainty": 19.4, "Time": "1899-03-15"},
  {"GMSL": -130.1, "GMSL uncertainty": 18.3, "Time": "1900-03-15"},
  {"GMSL": -130.5, "GMSL uncertainty": 17.6, "Time": "1901-03-15"},
  {"GMSL": -125.9, "GMSL uncertainty": 17.3, "Time": "1902-03-15"},
  {"GMSL": -117.9, "GMSL uncertainty": 17.0, "Time": "1903-03-15"},
  {"GMSL": -128.2, "GMSL uncertainty": 16.9, "Time": "1904-03-15"},
];