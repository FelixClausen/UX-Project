// react
import React, { Component } from 'react';

// css
import './App.css';

// components
import SeaLevelsData from './components/SeaLevelsLineChart';

// class function to render graph
class SeaLevelsChart extends Component {
	render() {
		return (
			// en div för att omfamna graf komponenten
			<div className="Graph">
				<SeaLevelsData />
			</div>
		);
	}
}
export default SeaLevelsChart;
