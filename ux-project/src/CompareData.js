import React, { Component, useEffect, useState } from "react";
import "./App.css";
//import MyPieChart from "./mycomponents/MyPieChart";
import MyBarChart from "./CompareBarChart";



//we need this import when using JSON data. Data is in "CO2Emission.js" as an array object.
import { getCO2Emissionsdata } from "./data/CO2Emission";


const App2 = () => {
  const [Co2Emission, setCo2Emission] = useState([]);
  const [indexYear1, setIndexYear1] = useState(0);
  const [indexYear2, setIndexYear2] = useState(0);

  useEffect(() => {

    //1.first method to fetch data  från API
    /*
    const url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
    fetch(url).then(response => response.json())
      .then(data => {
        setCo2Emission(data);
      })
*/

    //2.The second method to fetch data  från API
    /*
  async function fetchClimateData() {
  const url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
  const response = await fetch(url);
  const data = await response.json();
  setCo2Emission(data);
}
fetchClimateData();
*/

    //3.You may use this to load data offline from "CO2Emission.js"
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
      alert("Year could not be found.");
    }
  };

  return (
    <div className="App">
      <h1>Global CO2 Emission</h1>
      <MyBarChart
        chartName="Pie1"
        Co2Emission={Co2Emission[indexYear1]}
        onYearFilter={handleYearFilter}
      />
      <MyBarChart
        chartName="Pie2"
        Co2Emission={Co2Emission[indexYear2]}
        onYearFilter={handleYearFilter}
      />
    </div>
  );

}

export default App2;
