// react
import React, { Component } from 'react';

// css
import './App.css';

// components
import GlobalTemperature from './components/GlobalTemperatureLineChart';

// class function to render graph
class GlobalTemperatureChart extends Component {
	render() {
		return (
			// en div för att omfamna graf komponenten
			<div className="Graph">
				<GlobalTemperature />
			</div>
		);
	}
}
export default GlobalTemperatureChart;
