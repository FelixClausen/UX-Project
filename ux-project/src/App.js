import React, { Component} from 'react'
import './App.css';


import CO2Emission from './components/LineChart';
class App extends Component {
  state={};

  render () {
    return (
      <div className="App">
        <CO2Emission />
      </div>
    );
  }
}
export default App;