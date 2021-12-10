// react
import React, { Component} from 'react'

// css
import './App.css';

// components
import CO2Emission from './components/LineChart';

// class function to render graph
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