import { Form, Button, DropdownButton, Dropdown} from "react-bootstrap";
//import { PersonIcon } from '@primer/octicons-react'

import seaLevels from './images/seaLevels.jpg'

export const BookingForm = () => {
  return (
    <div className="form-container">
      <h1>Delta i workshops</h1>
      <h2>Rubrik</h2>
      <h6>1. Fyll i dina uppgifter</h6>

      <div className='rowContainer'>
      <Form>
        <div className="d-flex justify-content-between">
        <Form.Group className="mb-3" controlId="formBasicEmail">


          <Form.Label>Namn</Form.Label>
          <Form.Control type="email" placeholder="Åke"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastname">
          <Form.Label>Efternamn</Form.Label>
          <Form.Control type="password" placeholder="Åkesson" />
        </Form.Group>
        </div>

        <div className="d-flex justify-content-between">
        <Form.Group className="mb-3" controlId="formBasicTelephone">
          <Form.Label>Telefon</Form.Label>
          <Form.Control type="password" placeholder="+46 123 456 78" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTelephoneRepeat">
          <Form.Label>Bekräfta telefon</Form.Label>
          <Form.Control type="password" placeholder="+46 123 456 78" />
        </Form.Group>
        </div>

        <div className="d-flex justify-content-between">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-post</Form.Label>
          <Form.Control type="password" placeholder="Skriv in din e-postadress" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmailRepeat">
          <Form.Label>Bekräfta e-post</Form.Label>
          <Form.Control type="password" placeholder="Skriv in din e-postadress igen" />
        </Form.Group>
        </div>

        <h6 id='pickSubject'>2. Välj ämne</h6>
        <div className='d-flex justify-content-between'>
        <p className='pickSubject2'>Välj ämne</p>
        <p id='pickDate'>Välj datum</p>
        </div>
        <div className='d-flex justify-content-between'>
        <DropdownButton id="dropdown-basic-button" title="Fossila bränslen">
        <Dropdown.Item href="#/action-1">Global uppvärmning</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Havsnivån</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Glaciärer</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-basic-button" title="20 januari">
        <Dropdown.Item href="#/action-1">2 februari</Dropdown.Item>
        <Dropdown.Item href="#/action-2">12 februari</Dropdown.Item>
        <Dropdown.Item href="#/action-3">22 februari</Dropdown.Item>
        </DropdownButton>
        </div>

        <Form.Group className="mb-3" controlId="formBasicNews">
          <h6 id='stepThree'>3. Avslut</h6>
          <Form.Label id='newsUpdate'>Vill du bli uppdaterad med nyhetsbrev?</Form.Label>
          <Form.Check label="Uppdatera mig gärna" type="checkbox"/>


        </Form.Group>



        <div className="d-flex justify-content-center">
          <Button variant="secondary" type="submit" className="continue">
            Godkänn
          </Button>
        </div>
      </Form>


      <div className='form-container2'>
      <img src={seaLevels} id='waterImg'></img>
      <h3>Workshop om havsnivån</h3>
      <p>Delta i vår nya workshop som handlar om havsnivån och dess påverkan på oss människor!</p>
      </div>

      </div>

      </div>


  );
};

export default BookingForm;
