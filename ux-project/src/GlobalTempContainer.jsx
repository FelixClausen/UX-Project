// react
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";

// css
import './App.css';
import './responsive.css'

// components
import InfoBoxText from "./InfoBoxText";
import InfoBoxList from './InfoBoxList';
import GlobalTemperatureData from './GlobalTemperatureGraph'
import GlobalTemperatureCompareBarChart from "./GlobalTemperatureCompareBarChart";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

// vi behöver fler bilder, lägg in dom under images,
// byt sedan ut img värdet till de olika bilderna
// images
import globalTemperature from './images/globalTemperature.jpg'


// import seperate file that holds and wrapps data
// denna ska bytas ut till data om havsnivåer
import { getGlobalTemperaturesdata } from "./data/GlobalTemperature";

const GlobalTempContainer = () => {
    // redigera denna för att ändra den första listan
    const [GlobalTempList] = useState([
        { title: 'Visste du att...',
          li_1: 'Främsta miljöboven för global uppvärming är fossila bränslen?',
          li_2: 'Det leder till ökade vattennivåer?',
          li_3: 'Det blir en större risk för extremväder?',
          img: globalTemperature,
        },
      ])

      // redigera denna för att ändra den andra listan
      const [GlobalTempImpact] = useState([
        { title: 'Gör påverkan själv...',
          li_1: 'Använd förnybara energikällor',
          li_2: 'Tips nummer två',
          li_3: 'Tips nummer tre',
          img: globalTemperature,
        },
      ])

      // redigera denna för att ändra den första text blocket
      const [GlobalTempIntro] = useState([
        { title: 'Global uppvärmning',
          body: 'På grund av människan så är nivåerna av koldioxid och växthusgaser markant mycket högre i jordens historia än någonsin tidigare. En av de främsta orsakerna för dessa utsläpp är på grund av fossila bränslen. Som en konsekvens av uppvärmningen smälter glaciärer och vattennivåer stiger vilket kan leda till extrema väderförhållanden. Det kan sedan leda till att arter riskerar att dö och att ekosystemet förstörs.',
          img: globalTemperature,
          id: 2
        },
      ])

      // redigera denna för att ändra den andra text blocket
      const [GlobalTempInformation] = useState([
        { title: 'Temperaturen',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl metus, aliquet pretium justo suscipit, laoreet consequat erat. Sed ac augue vel diam pharetra rhoncus.',
          img: globalTemperature,
          id: 2
        },
      ])

      // redigera denna för att ändra den tredje text blocket
      const [GlobalTempEnding] = useState([
        { title: 'Framtida temperatur',
          body: 'Om vi inte lyckas begränsa en ökning av temperaturen till endast 1,5 grader står vi inför förödande konsekvenser. Som det ser ut idag måste vi minska utsläpp av växthusgaser med hälften globalt till år 2030.',
          img: globalTemperature,
          id: 2
        },
      ])

  const [GlobaltemperatureEmission, setGlobaltemperatureEmission] = useState([]);
  const [indexYear1, setIndexYear1] = useState(0);
  const [indexYear2, setIndexYear2] = useState(0);

  useEffect(() => {
    // gets data from local file
    setGlobaltemperatureEmission(getGlobalTemperaturesdata());
  }, []);

  const handleYearFilter = (chartName, Year) => {
    let index = GlobaltemperatureEmission.findIndex(
      gl => gl.Year === parseInt(Year)
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
      alert("Data från önskade årtalet finns inte ");
    }
  };
// stoleken på typsnittet börjar på 12,
// storleken kan heller inte gå över 17 eller under 10 pga allt fallerar.
// ändra px värdet när rätt texter är på plats
  const [fontSize, setFontSize] = useState(12);
  if (fontSize === 17) {
    setFontSize(fontSize - 1)
  }
  if (fontSize === 10) {
    setFontSize(fontSize + 1)
  }
  return (
    <div className="customBTN">
      <Link to="/">
        <button type="button" className="show btn btn-outline-dark customBTN"><span className='btnIcon-Left'><FontAwesomeIcon icon={faChevronLeft} /></span>Tillbaka</button>
      </Link>
      <div className='btnWrapper'>
        <p>Justera storleken på texterna</p>
        <button className='resizeUp' onClick={() => setFontSize(fontSize + 1)}> + </button>
        <button className='resizeDown' onClick={() => setFontSize(fontSize - 1)}> - </button>
      </div>
      <div style={{
            fontSize: `${fontSize}px`
        }}>
      <InfoBoxText blogs={GlobalTempIntro} />
      <InfoBoxList blogs={GlobalTempList} />
      </div>
      <h1 className='DiagramTitle'>Historisk statistik på global uppvärmning</h1>
      <p className='margin1'> Den globala komponenten av Climate at a Glance (GCAG) tillhandahåller temperaturinformation i global skala.
                              Verktyget tillhandahåller nästan realtidsanalys av månatliga och årliga temperaturer för världen och är avsett för studier av klimatförändringar och förändringar.</p>
      <p className='margin1'> Y-axeln representerar den genomsnittliga globala medeltemperaturavvikelser i grader Celsius i förhållande till en basperiod.</p>
      <GlobalTemperatureData />
      <h3 className='margin1'>Jämför årtal</h3>
      <div className="App compareBars">
        <GlobalTemperatureCompareBarChart
          chartName="Pie1"
          GlobaltemperatureEmission={GlobaltemperatureEmission[indexYear1]}
          onYearFilter={handleYearFilter}
        />
        <GlobalTemperatureCompareBarChart
          chartName="Pie2"
          GlobaltemperatureEmission={GlobaltemperatureEmission[indexYear2]}
          onYearFilter={handleYearFilter}
        />
      </div>
      <div style={{
            fontSize: `${fontSize}px`
        }}>
      <InfoBoxText blogs={GlobalTempInformation} />
      </div>

      <div style={{
            fontSize: `${fontSize}px`
        }}>
      <InfoBoxText blogs={GlobalTempEnding} />
      <InfoBoxList blogs={GlobalTempImpact} />
      </div>
      <Link to="/">
        <button type="button" className="show btn btn-outline-dark customBTN"><span className='btnIcon-Left'><FontAwesomeIcon icon={faChevronLeft} /></span> Tillbaka</button>
      </Link>
    </div>
  );
}

export default GlobalTempContainer;
