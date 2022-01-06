// react
import React from 'react';

// css
import './App.css';
import './responsive.css';

// images
import peopleAtLecture from './images/peopleAtLecture.jpg';
// components
import BookingForm from './form';

// container komponent
const WorkShop = () => {
	return (
		<div>
			<div className="workshopIntro">
				<h1 className="wsTitle">Workshops</h1>
				<div className="flex wsReverse">
					{/* text om som förklarar vad workshops är */}
					<div className="wsText">
						<h3>
							Workshop är en sammanställning av likasinnade som vill lära sig
							mer och gå in på djupet om klimat frågan.
						</h3>
						<p>
							För att delta behöver du registerade dig nedan. Det är helt
							gratis. Det enda du behöver är tillgång till en surfplatta eller
							dator. Du behöver heller inga förkunskaper om ämnet.
						</p>
					</div>
					<div>
						{/* en bild för att snygga till samt ge användaren någon form av exempel */}
						<img
							src={peopleAtLecture}
							alt="personer som deltar i en workshop"
							className="wsImg"
						/>
					</div>
				</div>
				<p className="welcome">Välkommen!</p>
			</div>
			{/* ett formulär för att boka in sig på workshops */}
			<BookingForm />
		</div>
	);
};

export default WorkShop;
