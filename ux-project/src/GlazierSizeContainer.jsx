// react
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";

// css
import './App.css';
import './responsive.css'

// components
import InfoBoxText from "./InfoBoxText";
import InfoBoxList from './InfoBoxList';
import SeaLevelsData from './SeaLevelsGraph'
import CompareBarChart from "./CompareBarChart";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

// vi behöver fler bilder, lägg in dom under images,
// byt sedan ut img värdet till de olika bilderna
// images
import x1 from './images/x1.png'


// import seperate file that holds and wrapps data
// denna ska bytas ut till data om havsnivåer
import { getCO2Emissionsdata } from "./data/CO2Emission";

const GlazierSizeContainer = () => {
      const [GlacierSizeList] = useState([
        { title: 'Visste du att...',
          li_1: 'fakta ett om klimat',
          li_2: 'fakta två om klimat',
          li_3: 'fakta tre om klimat',
          img: x1,
        },
      ])

      // redigera denna för att ändra den andra listan
      const [GlacierSizeImpact] = useState([
        { title: 'Gör påverkan själv...',
          li_1: 'Tips nummer ett',
          li_2: 'Tips nummer två',
          li_3: 'Tips nummer tre',
          img: x1,
        },
      ])

      // redigera denna för att ändra den första text blocket
      const [GlacierSizeIntro] = useState([
        { title: 'Glaziärer',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl metus, aliquet pretium justo suscipit, laoreet consequat erat. Sed ac augue vel diam pharetra rhoncus.',
          img: x1,
          id: 2
        },
      ])

      // redigera denna för att ändra den andra text blocket
      const [GlacierSizeInformation] = useState([
        { title: 'Temperaturen',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl metus, aliquet pretium justo suscipit, laoreet consequat erat. Sed ac augue vel diam pharetra rhoncus.',
          img: x1,
          id: 2
        },
      ])

      // redigera denna för att ändra den tredje text blocket
      const [GlacierSizeEnding] = useState([
        { title: 'Glaziärerna smälter',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl metus, aliquet pretium justo suscipit, laoreet consequat erat. Sed ac augue vel diam pharetra rhoncus.',
          img: x1,
          id: 2
        },
      ])

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
      <InfoBoxText blogs={GlacierSizeIntro} />
      <InfoBoxList blogs={GlacierSizeList} />
      </div>
      <h1>Historisk statistik på havsnivåer</h1>
      <h3 className='margin1'> !! Förklara vad datan representerar !!</h3>
      <SeaLevelsData />
      <h3 className='margin1'>Jämför årtal</h3>
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
      <div style={{
            fontSize: `${fontSize}px`
        }}>
      <InfoBoxText blogs={GlacierSizeInformation} />
      </div>

      <div style={{
            fontSize: `${fontSize}px`
        }}>
      <InfoBoxText blogs={GlacierSizeEnding} />
      <InfoBoxList blogs={GlacierSizeImpact} />
      </div>
      <Link to="/">
        <button type="button" className="show btn btn-outline-dark customBTN"><span className='btnIcon-Left'><FontAwesomeIcon icon={faChevronLeft} /></span> Tillbaka</button>
      </Link>
    </div>
  );
}

export default GlazierSizeContainer;
