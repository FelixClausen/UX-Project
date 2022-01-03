// react
import React, { Component } from 'react'

// css
import './App.css';

// components
import GlacierSizeData from './components/GlacierSizeLineChart';

// class function to render graph
class GlacierSizeChart extends Component {
  render () {
    return (
      <div className="Graph">
        <GlacierSizeData />
      </div>
    );
  }
}
export default GlacierSizeChart;