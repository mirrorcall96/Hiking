import {Card, Container,ListGroup} from "react-bootstrap";
import {useParams,Link,Redirect} from 'react-router-dom'
import { Helmet } from 'react-helmet';
import TripItem  from './tripItem.js';

const TripDetail = (props)=>{
    let tripSlug=useParams().tripSlug;
    let thisTrip = props.trips.find(trip=>trip.slug===tripSlug)
    if(!thisTrip) {
        return <Redirect to='/404'/>
    }
    let recomendedTrip = props.trips.filter(trip=>thisTrip.difficulty===trip.difficulty && thisTrip.name!==trip.name)
     recomendedTrip = recomendedTrip.map(trip => (<TripItem unit={props.unit} trip={trip} key={trip.id}/>))

    return <><center><Container>
        <h1></h1>
    <Card style={{ width: '30rem' }}>
        <Helmet><title>{thisTrip.name}</title></Helmet>
    <Link to={`/trips/${thisTrip.slug}`}>
    <Card.Img  src={thisTrip.image} />
    </Link>
    <Card.Body>
    <Card.Title>{thisTrip.name}</Card.Title>
    <Card.Text>
        <ListGroup>
  <ListGroup.Item>City : {thisTrip.city}</ListGroup.Item>
  <ListGroup.Item>Diffculty : {thisTrip.difficulty}</ListGroup.Item>
  <ListGroup.Item><b>{props.unit==="km"?thisTrip.length + " KM":"~"+Math.floor(thisTrip.length* 0.62137) + " Miles"}</b></ListGroup.Item>
  <ListGroup.Item>{thisTrip.details}</ListGroup.Item>

</ListGroup>
    </Card.Text>
    </Card.Body>
    </Card>
</Container>
</center>
<div class="jumbotron">
    <p><b>recommended List</b></p>
    {recomendedTrip}
</div>
</>

    }

export default TripDetail;