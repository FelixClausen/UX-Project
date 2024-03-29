// importerar react + boostrap komponenter
import { Form, Button, DropdownButton, Dropdown } from 'react-bootstrap';
//import { PersonIcon } from '@primer/octicons-react'

// css
import './responsive.css';

// images
import peopleAtLecture2 from './images/peopleAtLecture2.jpg';

export const BookingForm = () => {
	return (
		<div className="form-container">
			{/* titel för sektionen */}
			<div className="formIntro">
				<h1>Delta i workshops</h1>
			</div>

			<div className="flexCol">
				<div className="rowContainer">
					{/* använder komponenter från boostrap */}
					<Form>
						<h4>1. Fyll i dina uppgifter</h4>
						<div className="d-flex justify-content-between">
							<Form.Group className="mb-3" controlId="formBasicEmail">
								{/* Form.Label används för att beskriva fältet */}
								<Form.Label>Namn</Form.Label>
								{/* Form.Control är ett input fält för att användaren ska kunna skriva in sina uppgifter */}
								<Form.Control type="email" placeholder="Åke" />
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicLastname">
								{/* Form.Label används för att beskriva fältet */}
								<Form.Label>Efternamn</Form.Label>
								{/* Form.Control är ett input fält för att användaren ska kunna skriva in sina uppgifter */}
								<Form.Control type="email" placeholder="Åkesson" />
							</Form.Group>
						</div>

						<div className="d-flex justify-content-between">
							<Form.Group className="mb-3" controlId="formBasicTelephone">
								{/* Form.Label används för att beskriva fältet */}
								<Form.Label>Telefon</Form.Label>
								{/* Form.Control är ett input fält för att användaren ska kunna skriva in sina uppgifter */}
								<Form.Control type="email" placeholder="+46 123 456 78" />
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicTelephoneRepeat">
								{/* Form.Label används för att beskriva fältet */}
								<Form.Label>Bekräfta telefon</Form.Label>
								{/* Form.Control är ett input fält för att användaren ska kunna skriva in sina uppgifter */}
								<Form.Control type="email" placeholder="+46 123 456 78" />
							</Form.Group>
						</div>

						<div className="d-flex justify-content-between">
							<Form.Group className="mb-3" controlId="formBasicEmail">
								{/* Form.Label används för att beskriva fältet */}
								<Form.Label>E-post</Form.Label>
								{/* Form.Control är ett input fält för att användaren ska kunna skriva in sina uppgifter */}
								<Form.Control
									type="email"
									placeholder="Skriv in din e-postadress"
								/>
							</Form.Group>
							{/* Form.Control är ett input fält för att användaren ska kunna skriva in sina uppgifter */}
							<Form.Group className="mb-3" controlId="formBasicEmailRepeat">
								{/* Form.Label används för att beskriva fältet */}
								<Form.Label>Bekräfta e-post</Form.Label>
								{/* Form.Control är ett input fält för att användaren ska kunna skriva in sina uppgifter */}
								<Form.Control
									type="email"
									placeholder="Skriv in din e-postadress igen"
								/>
							</Form.Group>
						</div>

						<h4 id="pickSubject">2. Välj ämne</h4>
						<div className="d-flex justify-content-between">
							<p id="pickSubject2">Välj ämne</p>
							<p id="pickDate">Välj datum</p>
						</div>
						<div className="d-flex justify-content-between">
							{/* DropdownButton är också från boostrap.
							    använder dropdownbuttons för användaren ska kunna välja ett alternativ */}
							<DropdownButton
								id="dropdown-basic-button"
								title="Fossila bränslen"
							>
								{/* ett Dropdown.Item  för varje alternativ i listan */}
								<Dropdown.Item href="#/action-1">
									Global uppvärmning
								</Dropdown.Item>
								<Dropdown.Item href="#/action-2">Havsnivån</Dropdown.Item>
								<Dropdown.Item href="#/action-3">Glaciärer</Dropdown.Item>
							</DropdownButton>

							<DropdownButton id="dropdown-basic-button" title="20 januari">
								{/* ett Dropdown.Item  för varje alternativ i listan */}
								<Dropdown.Item href="#/action-1">2 februari</Dropdown.Item>
								<Dropdown.Item href="#/action-2">12 februari</Dropdown.Item>
								<Dropdown.Item href="#/action-3">22 februari</Dropdown.Item>
							</DropdownButton>
						</div>

						<Form.Group className="mb-3" controlId="formBasicNews">
							{/* Form.Label används för att beskriva fältet */}
							<h4 id="stepThree">3. Avslut</h4>
							<Form.Label id="newsUpdate">
								Vill du bli uppdaterad med nyhetsbrev?
							</Form.Label>
							{/* använder en checkbox för att användaren ska kunna välja att få nyhetsbrev */}
							<Form.Check label="Uppdatera mig gärna" type="checkbox" />
						</Form.Group>

						<div className="d-flex justify-content-center">
							{/* en knapp för att godkänna bookningen */}
							<Button variant="secondary" type="submit" className="continue">
								Godkänn
							</Button>
						</div>
					</Form>
				</div>
				<div className="form-container2">
					{/* en sektion med en bild och beskrivande text för att beskriva vad formuläret handlar om */}
					<img src={peopleAtLecture2} id="formImg" alt="bild på havsnivå"></img>
					<h3>Workshop om havsnivån</h3>
					<p>
						Delta i vår nya workshop som handlar om havsnivån och dess påverkan
						på oss människor!
					</p>
				</div>
			</div>
		</div>
	);
};

export default BookingForm;
