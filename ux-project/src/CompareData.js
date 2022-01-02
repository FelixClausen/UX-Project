// react
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

// css
import "./App.css";

// components
import CompareBarChart from "./CompareBarChart";
import InfoBoxList from "./InfoBoxList";

// import seperate file that holds and wrapps data
import { getCO2Emissionsdata } from "./data/CO2Emission";

const App2 = () => {
  const [Co2Emission, setCo2Emission] = useState([]);
  const [indexYear1, setIndexYear1] = useState(0);
  const [indexYear2, setIndexYear2] = useState(0);

  useEffect(() => {
    // gets data from local file
    setCo2Emission(getCO2Emissionsdata());
  }, []);

  const handleYearFilter = (chartName, Year) => {
    let index = Co2Emission.findIndex(
      co2 => co2.Year === parseInt(Year)
    );
    if (index !== -1) {
      switch (chartName) {
        case "Pie1":
          setIndexYear1(index);
          break;
        case "Pie2":
          setIndexYear2(index);
          break;
      }
    } else {
      // alert the user if no data found
      alert("Year could not be found.");
    }
  };

  // return the actual charts
  return (
    <div className="customBTN center">
      <div className="App compareBars">
        <CompareBarChart
          chartName="Pie1"
          Co2Emission={Co2Emission[indexYear1]}
          onYearFilter={handleYearFilter}
        />
        <CompareBarChart
          chartName="Pie2"
          Co2Emission={Co2Emission[indexYear2]}
          onYearFilter={handleYearFilter}
        />
      </div>
      <div>
      <InfoBoxList />
      </div>
    </div>
  );
}

export default App2;