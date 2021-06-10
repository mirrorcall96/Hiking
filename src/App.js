import { useState } from 'react';
import Home from './components/Home'
import _trips from './trips';
import TripList from './components/tripList'
import TripDetail from './components/tripDetail'
import NotFound from './components/notFound'

import {Title,NavLink} from './styles'
import { Route , Switch} from "react-router";
import { Link} from "react-router-dom";

import { Image,Navbar , Nav,Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';


function App() {
  const [trips ,setTrip ]= useState(_trips);
  const [unit ,setUnit ]= useState("km");
  return (
      <Title>
        <Navbar bg="light" expand="lg" className="justify-content-between">
        <Navbar.Brand as={Link} to="/"><Image width="15%" height="15%"/>Hiking</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link  as={NavLink} to="/" >Home</Nav.Link>
                <Nav.Link  as={NavLink} to="/trips">Trip List</Nav.Link>
              </Nav>
              <Form inline>
              <Form.Control onChange={(e)=>setUnit(e.target.value)} as="select" >
                <option value="km">Kilometer (KM)</option>
                <option value="m">Mile (M)</option>
              </Form.Control>
            </Form>
        </Navbar>
        <Switch>
          <Route exact path='/trips/:tripDifficulty(easy|meduim|hard)' >
            <TripList  unit={unit} trips={trips} setTrip={setTrip}  />
          </Route>
          <Route exact path='/trips/:tripSlug' >
            <TripDetail unit={unit} trips={_trips} setTrip={setTrip}   />
          </Route>
          <Route exact path='/trips/' >
            <TripList  unit={unit} trips={trips} setTrip={setTrip}  />
          </Route>
          <Route exact path='/' component={Home} />
          <Route path='/' component={NotFound} />
        </Switch>
      </Title>
  );
}

export default App;