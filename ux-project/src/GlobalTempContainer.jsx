// react
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

// css
import './App.css';
import './responsive.css';

// components
import InfoBoxText from './InfoBoxText';
import InfoBoxList from './InfoBoxList';
import GlobalTemperatureData from './GlobalTemperatureGraph';
import GlobalTemperatureCompareBarChart from './GlobalTemperatureCompareBarChart';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// images
import globalwarmingOne from './images/globalwarmingOne.svg';
import globalwarmingTwo from './images/globalwarmingTwo.png';
import globalwarmingThree from './images/globalwarmingThree.jpeg';
import globalwarmingFour from './images/globalwarmingFour.jpg';
import globalwarmingFive from './images/globalwarmingFive.jpg';

// import seperate file that holds and wrapps data
import { getGlobalTemperaturesdata } from './data/GlobalTemperature';

const GlobalTempContainer = () => {
	// denna visar en lista med information om ämnet
	// ett obejkt för att anpassa text innehållet i återanvända komponenter
	const [GlobalTempList] = useState([
		{
			title: 'Visste du att...',
			li_1: 'Främsta miljöboven för global uppvärming är fossila bränslen?',
			li_2: 'Det leder till ökade vattennivåer?',
			li_3: 'Med endast 2-3 graders ökning står vi inför förödande konsekvenser?',
			img: globalwarmingThree,
		},
	]);

	// denna visar tips på hur man själv kan göra påverkan
	// ett obejkt för att anpassa text innehållet i återanvända komponenter
	const [GlobalTempImpact] = useState([
		{
			title: 'Gör påverkan själv...',
			li_1: 'Ändra dina matvanor',
			li_2: 'Flyg mindre ofta',
			li_3: 'Köp mer begagnat',
			img: globalwarmingFive,
		},
	]);

	// denna visar introduktion om ämnet
	// ett obejkt för att anpassa text innehållet i återanvända komponenter
	const [GlobalTempIntro] = useState([
		{
			title: 'Global uppvärmning',
			body: 'På grund av människan så är nivåerna av koldioxid och växthusgaser markant mycket högre i jordens historia än någonsin tidigare. En av de främsta orsakerna för dessa utsläpp är på grund av fossila bränslen. Som en konsekvens av uppvärmningen smälter glaciärer och vattennivåer stiger vilket kan leda till extrema väderförhållanden. Det kan sedan leda till att arter riskerar att dö och att ekosystemet förstörs.',
			img: globalwarmingOne,
			id: 2,
		},
	]);
	// denna visar ett textfält
	// ett obejkt för att anpassa text innehållet i återanvända komponenter
	const [GlobalTempInformation] = useState([
		{
			title: 'Temperaturen',
			body: 'Om vi fortsätter att släppa ut samma mängd växthusgaser i framtiden så står vi inför en risk att öka temperaturen på jorden till 3 grader. Hela ekosystemet hade satts på spel då vi hade förlorat många växter och djur. Därför har alla världens länder beslutat att ha som mål att stanna vid 1,5 graders uppvärmning.',
			img: globalwarmingTwo,
			id: 2,
		},
	]);
	// denna visar avslutningen om ämnet
	// ett obejkt för att anpassa text innehållet i återanvända komponenter
	const [GlobalTempEnding] = useState([
		{
			title: 'Framtida temperatur',
			body: 'Om vi inte lyckas begränsa en ökning av temperaturen till endast 1,5 grader står vi inför förödande konsekvenser. Som det ser ut idag måste vi minska utsläpp av växthusgaser med hälften globalt till år 2030.',
			img: globalwarmingFour,
			id: 2,
		},
	]);
	// hämtar datan och bestämmmer index för att kunna hitta årtal att jämföra
	const [GlobaltemperatureEmission, setGlobaltemperatureEmission] = useState(
		[]
	);
	const [indexYear1, setIndexYear1] = useState(0);
	const [indexYear2, setIndexYear2] = useState(0);

	useEffect(() => {
		// gets data from local file
		setGlobaltemperatureEmission(getGlobalTemperaturesdata());
	}, []);

	// funktion för att köra och hitta årtal
	const handleYearFilter = (chartName, Year) => {
		let index = GlobaltemperatureEmission.findIndex(
			(gl) => gl.Year === parseInt(Year)
		);
		// om årtal hittat, fyll i datan i Pie1
		if (index !== -1) {
			switch (chartName) {
				case 'Pie1':
					setIndexYear1(index);
					break; // om årtal hittat, fyll i datan i Pie2
				case 'Pie2':
					setIndexYear2(index);
					break;
			}
		}
	};
	// funktion för att ändra storlek på typsnittet
	// sätter storleken på 12px
	const [fontSize, setFontSize] = useState(12);
	// om storleken på typsnittet är 17px, ta bort 1px vid klick
	if (fontSize === 17) {
		setFontSize(fontSize - 1);
	} // om storleken på typsnittet är 10px, lägg till 1px vid klick
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
				<InfoBoxText blogs={GlobalTempIntro} />
				<InfoBoxList blogs={GlobalTempList} />
			</div>
			{/* title och text som beskriver vad statistiken mäts i */}
			<h1 className="DiagramTitle">
				Historisk statistik på global uppvärmning
			</h1>
			<p className="margin1">
				{' '}
				Den globala komponenten av Climate at a Glance (GCAG) tillhandahåller
				temperaturinformation i global skala. Verktyget tillhandahåller nästan
				realtidsanalys av månatliga och årliga temperaturer för världen och är
				avsett för studier av klimatförändringar och förändringar.
			</p>
			<p className="margin1">
				{' '}
				Y-axeln representerar den genomsnittliga globala
				medeltemperaturavvikelser i grader Celsius i förhållande till en
				basperiod.
			</p>
			{/* visar linjediagrammet om global uppvärmning */}
			<GlobalTemperatureData />
			{/* title för nästa sektion, funktionen för att jämföra årtal */}
			<h3 className="margin1">Jämför årtal</h3>
			{/* texter för att förklara kort hur användaren ska göra en sökning */}
			<p className="margin1">
				Statistik finns endast tillgänglig mellan årtalen 1880 och 2016
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
			<div
				style={{
					fontSize: `${fontSize}px`,
				}}
			>
				<InfoBoxText blogs={GlobalTempInformation} />
			</div>
			{/* använder en div för att omfamna de texter som ska kunna justeras med knapparna */}
			<div
				style={{
					fontSize: `${fontSize}px`,
				}}
			>
				{/* visar olika textkomponenter, fyller dem med innehåll från objekten ovan */}
				<InfoBoxText blogs={GlobalTempEnding} />
				<InfoBoxList blogs={GlobalTempImpact} />
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

export default GlobalTempContainer;
