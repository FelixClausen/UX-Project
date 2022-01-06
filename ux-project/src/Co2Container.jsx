// react
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

// css
import './App.css';
import './responsive.css';

// components
import InfoBoxText from './InfoBoxText';
import InfoBoxList from './InfoBoxList';
import Graph from './Co2Graph';
import CompareBarChart from './Co2CompareBarChart';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// images
import fossilFuel from './images/fossilFuel.jpg';
import fossilabränslenindustri from './images/fossilabränslenindustri.jpg';
import fossilabränslenhamn from './images/fossilabränslenhamn.jpg';
import fossilabränslenfossil from './images/fossilabränslenfossil.jpg';
import fossilabänslenpåverkan from './images/fossilabänslenpåverkan.jpg';

// import seperate file that holds and wrapps data
import { getCO2Emissionsdata } from './data/CO2Emission';

const InfoBox = () => {
	// denna visar introduktion om ämnet
	// ett obejkt för att anpassa text innehållet i återanvända komponenter
	const [fossilFuelsIntro] = useState([
		{
			title: 'Fossila bränslen',
			body: 'Fossila bränslen är olika energikällor i form av kolväten, som kommer från äldre geologiska perioder, och som kan påträffas på eller under marken i lito- och pedosfären. Enligt den biogeniska teorin, som är förhärskande idag, utgörs de fossila bränslena av rester av forntida djur och växter som bäddats ner i jorden och sedan under högt tryck och värme brutits ner till sina beståndsdelar (huvudsakligen kol och kolföreningar). Enligt den abiogeniska teorin utgörs de fossila bränslena av resultaten av kemiska processer under jordens forntid.',
			img: fossilFuel,
			id: 1,
		},
	]);

	// denna visar ett textfält
	// ett obejkt för att anpassa text innehållet i återanvända komponenter
	const [fossilFuelsInformation] = useState([
		{
			title: 'Olika varianter',
			body: 'De fossila bränslena omfattar främst naturgas, petroleum och kol. Naturgas består huvudsakligen av gasen metan och har ett högt innehåll av grundämnet väte jämfört med grundämnet kol. Metan finns i naturgasfält tillsammans med råolja eller bundet som metanklatrat. Petroleum (även kallad råolja) påträffas i vätskeform och innehåller en större mängd av grundämnet kol, medan de icke-flyktiga bergarterna som också kallas kol (ej att förväxla med grundämnet kol) innehåller en mycket stor mängd av grundämnet kol.',
			img: fossilabränslenindustri,
			id: 1,
		},
	]);
	// denna visar avslutningen om ämnet
	// ett obejkt för att anpassa text innehållet i återanvända komponenter
	const [fossilFuelsEnding] = useState([
		{
			title: 'Framtida fossila bränseln',
			body: 'Enligt den biogeniska teorin bildades jordens petroleumtillgångar då förhistoriska alger och plankton samt andra växter och döda djur lagt sig på sjö- och havsbottnar under syrefria förhållanden. Detta organiska material har begravts under tjocka lager sediment. Genom högt tryck och hög temperatur har det omvandlats kemiskt, först till kerogen och sedan genom ytterligare tryck och värme till kolväten i vätske- eller gasform (det vill säga naturgas och petroleum). ',
			img: fossilabränslenhamn,
			id: 1,
		},
	]);
	// denna visar en lista med information om ämnet
	// ett obejkt för att anpassa text innehållet i återanvända komponenter
	const [fossilFuelsList] = useState([
		{
			title: 'Visste du att...',
			li_1: 'När fossila bränslen förbränns släpper de ut ohälsosamma gifter i luften vi andas',
			li_2: 'Fossila bränslen är icke-förnybara, vilket innebär att de inte kan tillverkas av människor',
			li_3: 'Cirka 90 % av vår energi kommer från fossila bränslen',
			img: fossilabränslenfossil,
		},
	]);

	// denna visar tips på hur man själv kan göra påverkan
	// ett obejkt för att anpassa text innehållet i återanvända komponenter
	const [fossilFuelsImpact] = useState([
		{
			title: 'Gör påverkan själv...',
			li_1: 'Köp närproducerad mat. Om det produceras på en gård i närheten behövs mindre bränsle för att transportera det',
			li_2: 'Installera solpaneler på ditt tak hemma så att du kan generera mer förnybar energi',
			li_3: 'Skaffa en elbil om det är möjligt',
			img: fossilabänslenpåverkan,
		},
	]);

	// hämtar datan och bestämmmer index för att kunna hitta årtal att jämföra
	const [Co2Emission, setCo2Emission] = useState([]);
	const [indexYear1, setIndexYear1] = useState(0);
	const [indexYear2, setIndexYear2] = useState(0);

	useEffect(() => {
		// gets data from local file
		setCo2Emission(getCO2Emissionsdata());
	}, []);

	// funktion för att köra och hitta årtal
	const handleYearFilter = (chartName, Year) => {
		let index = Co2Emission.findIndex((co2) => co2.Year === parseInt(Year));
		// om årtal hittat, fyll i datan i Pie1
		if (index !== -1) {
			switch (chartName) {
				case 'Pie1':
					setIndexYear1(index);
					break;
				// om årtal hittat, fyll i datan i Pie2
				case 'Pie2':
					setIndexYear2(index);
					break;
			}
		} else {
			// om inget hittades, visa felmeddelande
			alert('Data från önskade årtalet finns inte ');
		}
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
				<InfoBoxText blogs={fossilFuelsIntro} />
				<InfoBoxList blogs={fossilFuelsList} />
			</div>
			<h1>Historisk statistik på fossila bränslen</h1>
			<p className="margin1">
				Statistiken representerar de fyra vanligaste varianterna av fossila
				bränslen, gasbränsle, flytande bränsle, fast bränsle och cement. Genom
				att analysera alla fyra varianter sammanställt får du bäst överblick av
				användingen av fossila bränslen.{' '}
			</p>
			<p className="margin1">
				Y-axel representerar totala koldioxidutsläpp från
				fossilbränsleförbrukning och cementproduktion (miljoner ton C).
			</p>
			{/* visar linjediagrammet om co2 */}
			<Graph />
			{/* title för nästa sektion, funktionen för att jämföra årtal */}
			<h3 className="margin1">Jämför årtal</h3>
			{/* en div som visar de två stapeldiagrammen */}
			{/* namngiven Pie1 för att kunna fylla den med rätt data,
                kopplar den till det första året som hittades på användarens sökning */}
			<div className="App compareBars">
				{/* visar stapeldiagrammet */}
				{/* namngiven Pie2 för att kunna fylla den med rätt data,
                    kopplar den till det första året som hittades på användarens sökning, */}
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
			{/* använder en div för att omfamna de texter som ska kunna justeras med knapparna */}
			<div
				style={{
					fontSize: `${fontSize}px`,
				}}
			>
				<InfoBoxText blogs={fossilFuelsInformation} />
			</div>
			{/* använder en div för att omfamna de texter som ska kunna justeras med knapparna */}
			<div
				style={{
					fontSize: `${fontSize}px`,
				}}
			>
				{/* visar olika textkomponenter, fyller dem med innehåll från objekten ovan */}
				<InfoBoxText blogs={fossilFuelsEnding} />
				<InfoBoxList blogs={fossilFuelsImpact} />
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

export default InfoBox;
