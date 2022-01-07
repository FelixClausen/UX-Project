// react
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

// css
import './App.css';
import './responsive.css';

// components
import InfoBoxText from './InfoBoxText';
import InfoBoxList from './InfoBoxList';
import SeaLevelsData from './SeaLevelsGraph';
import SeaLevelCompareBarChart from './SeaLevelCompareBarChart';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// images
import sealevelsOne from './images/sealevelsOne.jpeg';
import sealevelsTwo from './images/sealevelsTwo.jpeg';
import sealevelsThree from './images/sealevelsThree.jpeg';
import sealevelsFour from './images/sealevelsFour.jpeg';
import sealevelsFive from './images/sealevelsFive.jpg';

// import seperate file that holds and wrapps data
import { getSeaLevelsdata } from './data/SeaLevel';

const SeaLevelsContainer = () => {
	// denna visar en lista med information om ämnet
	// ett obejkt för att anpassa text innehållet i återanvända komponenter
	const [seaLevelsList] = useState([
		{
			title: 'Visste du att...',
			li_1: 'Haven tar upp nästan hälften av all koldioxid och på grund av det försuras haven då det omvandlas till kolsyra',
			li_2: 'Vattennivåerna har stigit mycket mer de senaste 10 åren',
			li_3: 'År 2100 beräknas vattennivån ha stigit med ca 43cm globalt',
			img: sealevelsThree,
		},
	]);

	// denna visar tips på hur man själv kan göra påverkan
	// ett obejkt för att anpassa text innehållet i återanvända komponenter
	const [seaLevelsImpact] = useState([
		{
			title: 'Gör påverkan själv...',
			li_1: 'Välj förnybara energikällor',
			li_2: 'Lämna bilen hemma, åk kommunalt eller cykel',
			li_3: 'Skydda våtmarker',
			img: sealevelsFive,
		},
	]);

	// denna visar introduktion om ämnet
	// ett obejkt för att anpassa text innehållet i återanvända komponenter
	const [seaLevelsIntro] = useState([
		{
			title: 'Om havsnivåer',
			body: 'På grund av den globala uppvärmingen så ökar temperaturen så att isar smälter vilket leder till högre havsnivåer. Ungefär hälften av all koldioxid i atmosfären tas upp av haven och det omvandlas till kolsyra vilket gör att havsvattnen försuras. Salthalter i haven kommer också att påverkas. I haven nära polerna kommer salthalterna i vattnet bli lägre och i haven nära ekvatorn kommer salthalterna att bli högre.',
			img: sealevelsOne,
			id: 2,
		},
	]);

	// denna visar ett textfält
	// ett obejkt för att anpassa text innehållet i återanvända komponenter
	const [seaLevelsInformation] = useState([
		{
			title: 'Mer om havsnivåer',
			body: 'Mellan år 1900 och 1970 så har vattennivån stigit ca 1 mm per år fram tills de senaste tio åren då vattennivån istället stigit med nästan 4 mm per år. Den stigande vattennivån beror mest på en kombination av smältvatten från glaciärer och inlandsisar och termisk expansion av havsvatten när det värms upp.',
			img: sealevelsTwo,
			id: 2,
		},
	]);

	// denna visar avslutningen om ämnet
	// ett obejkt för att anpassa text innehållet i återanvända komponenter
	const [seaLevelsEnding] = useState([
		{
			title: 'Framtida havsnivåer',
			body: 'Om den globala temperaturen fortsätter att värmas kommer havsnivån att fortsätta att stiga. Hur mycket den kommer att öka beror mest på takten för framtida koldioxidutsläpp och framtida global uppvärmning. Hur snabbt den kommer att stiga beror mest på hur snabbt glaciären och inlandsisen smälter. Om vattennivåerna fortsätter att öka som de gjort de senaste åren så beräknas de ha stigit upp till 43cm år 2100.',
			img: sealevelsFour,
			id: 2,
		},
	]);

	// hämtar datan och bestämmmer index för att kunna hitta årtal att jämföra
	const [SeaLevelEmission, setSeaLevelEmission] = useState([]);
	const [indexTime1, setIndexTime1] = useState(0);
	const [indexTime2, setIndexTime2] = useState(0);

	useEffect(() => {
		// gets data from local file
		setSeaLevelEmission(getSeaLevelsdata());
	}, []);

	// funktion för att köra och hitta årtal
	const handleTimeFilter = (chartName, Time) => {
		let index = SeaLevelEmission.findIndex((sl) => sl.Time === parseInt(Time));
		// om årtal hittat, fyll i datan i Pie1
		if (index !== -1) {
			switch (chartName) {
				case 'Pie1':
					setIndexTime1(index);
					break;
				// om årtal hittat, fyll i datan i Pie2
				case 'Pie2':
					setIndexTime2(index);
					break;
			}
		}
		/*else {
			// om inget hittades, visa felmeddelande
			alert('Data från önskade årtalet finns inte ');
		}*/
	};
	// funktion för att ändra storlek på typsnittet
	// sätter storleken på 12px
	const [fontSize, setFontSize] = useState(12);
	// om storleken på typsnittet är 17px, ta bort 1px vid klick
	if (fontSize === 17) {
		setFontSize(fontSize - 1);
	}
	// om storleken på typsnittet är 10px, lägg till 1px vid klick
	if (fontSize === 10) {
		setFontSize(fontSize + 1);
	}
	return (
		<div className="customBTN">
			{/* använder link för att gå tillbaka till startsidan */}
			<Link to="/">
				<button type="button" className="show btn btn-outline-dark customBTN">
					<span className="btnIcon-Left">
						<FontAwesomeIcon icon={faChevronLeft} />
					</span>
					Tillbaka
				</button>
			</Link>
			{/* en container div för att visa knapparna som justerar storleken på typsnittet */}
			<div className="btnWrapper">
				<p>Justera storleken på texterna</p>
				{/* en knapp för att förstora texterna */}
				<button className="resizeUp" onClick={() => setFontSize(fontSize + 1)}>
					{' '}
					+{' '}
				</button>
				{/* en knapp för att minska texterna */}
				<button
					className="resizeDown"
					onClick={() => setFontSize(fontSize - 1)}
				>
					{' '}
					-{' '}
				</button>
			</div>
			{/* använder en div för att omfamna de texter som ska kunna justeras med knapparna */}
			<div
				style={{
					fontSize: `${fontSize}px`,
				}}
			>
				{/* visar olika textkomponenter, fyller dem med innehåll från objekten ovan */}
				<InfoBoxText blogs={seaLevelsIntro} />
				<InfoBoxList blogs={seaLevelsList} />
			</div>
			{/* title och text som beskriver vad statistiken mäts i */}
			<h1 className="DiagramTitle">Historisk statistik om havsnivåer</h1>
			<p className="margin1">
				{' '}
				Linjediagrammet visar genomsnittlig havsnivåförändring, vilket hänvisar
				till havsytans höjd, oavsett om närliggande land stiger eller faller.
			</p>
			<p className="margin1">
				{' '}
				Kumulativa förändringar är baserat på en kombination av
				långtidsmätningar av tidvattenmätare och de senaste satellitmätningarna.
				GMSL står för Global Mean Sea Level.{' '}
			</p>
			<p className="margin1"> Y-axeln representerar meter. </p>
			{/* visar linjediagrammet om data om havsnivåer */}

			<SeaLevelsData />
			{/* title för nästa sektion, funktionen för att jämföra årtal */}
			<h3 className="margin1">Jämför årtal</h3>
			{/* texter för att förklara kort hur användaren ska göra en sökning */}
			<p className="margin1">
				Statistik finns endast tillgänglig mellan årtalen 1880 och 2013
			</p>
			<p className="margin1">
				För att söka årtal, skriv in årtalet i sökrutan, t.ex 1899
			</p>
			<p className="margin1">
				Om du vill kolla på ett nytt årtal, radera det första och skriv in ditt
				nya
			</p>
			{/* en div som visar de två stapeldiagrammen */}
			{/* namngiven Pie1 för att kunna fylla den med rätt data,
                kopplar den till det första året som hittades på användarens sökning */}
			<div className="App compareBars">
				{/* visar stapeldiagrammet */}
				{/* namngiven Pie2 för att kunna fylla den med rätt data,
                    kopplar den till det första året som hittades på användarens sökning, */}
				<SeaLevelCompareBarChart
					chartName="Pie1"
					SeaLevelEmission={SeaLevelEmission[indexTime1]}
					onTimeFilter={handleTimeFilter}
				/>
				<SeaLevelCompareBarChart
					chartName="Pie2"
					SeaLevelEmission={SeaLevelEmission[indexTime2]}
					onTimeFilter={handleTimeFilter}
				/>
			</div>
			{/* använder en div för att omfamna de texter som ska kunna justeras med knapparna */}
			<div
				style={{
					fontSize: `${fontSize}px`,
				}}
			>
				<InfoBoxText blogs={seaLevelsInformation} />
			</div>
			{/* använder en div för att omfamna de texter som ska kunna justeras med knapparna */}
			<div
				style={{
					fontSize: `${fontSize}px`,
				}}
			>
				{/* visar olika textkomponenter, fyller dem med innehåll från objekten ovan */}
				<InfoBoxText blogs={seaLevelsEnding} />
				<InfoBoxList blogs={seaLevelsImpact} />
			</div>
			{/* använder link för att gå tillbaka till startsidan */}
			<Link to="/">
				<button type="button" className="show btn btn-outline-dark customBTN">
					<span className="btnIcon-Left">
						<FontAwesomeIcon icon={faChevronLeft} />
					</span>{' '}
					Tillbaka
				</button>
			</Link>
		</div>
	);
};

export default SeaLevelsContainer;
