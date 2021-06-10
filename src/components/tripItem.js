import {Card} from "react-bootstrap"
import { Link} from "react-router-dom";

const TripItem = (props)=>{
return <Card style={{ width: '18rem' }}>
<Link to={`/trips/${props.trip.slug}`}>
<Card.Img  src={props.trip.image} />
</Link>
<Card.Body>
<Card.Title>{props.trip.name}</Card.Title>
<Card.Text>{props.unit==="km"?props.trip.length + " KM":"~"+Math.floor(props.trip.length* 0.62137) + " Miles"}
</Card.Text>
</Card.Body>
</Card>}

export default TripItem;