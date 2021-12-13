// react
import React, { Component} from 'react'

// css
import './App.css';

// components
import CO2Emission from './components/LineChart';

// class function to render graph
class Graph extends Component {
  state={};

  render () {
    return (
      <div className="Graph">
        <CO2Emission />
      </div>
    );
  }
}
export default Graph;