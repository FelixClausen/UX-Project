// react
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// css
import './App.css';

//images
import fossilabränslenhamn from './images/fossilabränslenhamn.jpg'
import globalTemperature from './images/globalTemperature.jpg';
import glaciersSize from './images/glaciersSize.jpeg';
import seaLevels from './images/seaLevels.jpg';
import x1 from './images/x1.png'

// Kolla figma för nya propotioner för bilderna (insta post 1-4)
// se nedre raden på index korten för skillnad
// vi behöver också fler bilder

// !!! texterna behöver skrivas om då det är kopierade från wikipedia !!!

// components
import IndexCard from './indexCard';

const IndexCardWrapper = () => {
  const [fossilFuels] = useState([
    { title: 'Fossila bränslen',
      body: 'Fossila bränslen är olika energikällor i form av kolväten som kommer från äldre geologiska perioder.',
      img: fossilabränslenhamn,
      id: 1
    },
  ])

  const [waterLevels] = useState([
    { title: 'Vatten nivåer',
      body: 'Havsyta, eller havsytan, havets nivå, är en nollpunkt som man refererar till i angivelser om höjder.',
      img: seaLevels,
      id: 2
    },
  ])

  const [globalTemperatures] = useState([
    { title: 'Global uppvärmning',
      body: 'Global uppvärmning kallas den observerade uppvärmningen av jordens lägre atmosfär och hav.',
      img: globalTemperature,
      id: 3
    },
  ])

  const [glaciersSizes] = useState([
    { title: 'Glaciär',
      body: 'En glaciär definieras som en årligen ackumulerad och omsatt massa av is och snö som har börjat röra sig.',
      img: x1,
      id: 4
    },
  ])

  return (
    <div className="indexWrapper">
      {/* Section title */}
      <h3 className="indexCardTitle">Vad vill du lära dig mer om?</h3>
      <div className='flex'>
        <div>
          {/* Uses components */}
          {/* Eftersom Link omfamnar hela komponenten blir hela kortet en länk och inte bara knappen.
              Kanske kan vara så? */}
          <Link to="/fossil">
            <IndexCard blogs={fossilFuels}/>
          </Link>
            <Link to="/havsniva">
          <IndexCard blogs={waterLevels}/>
          </Link>
        </div>
        <div>
        <Link to="/global">
          <IndexCard blogs={globalTemperatures}/>
        </Link>
        <Link to="/glaciar">
          <IndexCard blogs={glaciersSizes}/>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default IndexCardWrapper;

/*
function IndexCardWrapper() {
  return (
    <div className="indexWrapper">
      <h3 className="indexCardTitle">Vårt klimat</h3>
      <IndexCard />
      <IndexCard />
    </div>
  );
}
/export default IndexCardWrapper;
*/