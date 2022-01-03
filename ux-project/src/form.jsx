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
        <DropdownButton id="dropdown-basic-button" title="Fossil fuel">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-basic-button" title="20 januari">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
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
      <h3>Workshopnamn</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta vel delectus corporis deleniti a at reiciendis fugiat rem repellendus libero maiores deserunt voluptates, incidunt sed ipsum. Fugit distinctio corporis voluptatem.</p>
      </div>

      </div>

      </div>


  );
};

export default BookingForm;