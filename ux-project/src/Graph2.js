// react
import React, { Component } from 'react'

// css
import './App.css';

// components
import SeaLevels from './components/LineChart2';

// class function to render graph
class Test extends Component {
  render () {
    return (
      <div className="Graph">
        <SeaLevels />
      </div>
    );
  }
}
export default Test;