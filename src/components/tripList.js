import { useState } from 'react';
import {useParams} from 'react-router-dom'
import { Helmet } from 'react-helmet';
import {Row} from "react-bootstrap"
import TripItem  from './tripItem.js';
import SearchBar from './SearchBar'
import _trips from '../trips';

const TripList = (props) =>{
    const [searchWord ,setSearchWord ]= useState("");
    const [sortType ,setSortType ]= useState("");
    const [length ,setLength ]= useState(20);
    const tripDifficulty=useParams().tripDifficulty;;

        let filteredTrips =_trips.filter(trip=>trip.name.toLowerCase().includes(searchWord.toLowerCase()) || trip.city.toLowerCase().includes(searchWord.toLowerCase()))
        .filter(trip=>trip.length <= length)
        .filter(trip=>trip.difficulty===tripDifficulty || !tripDifficulty);
        switch(sortType){
            case "length19" : filteredTrips.sort((a,b)=>a.length-b.length);break;
            case "length91" : filteredTrips.sort((a,b)=>b.length-a.length);break;
            case "nameAZ"   : filteredTrips.sort((a,b)=>b.name >= a.name?-1:1);break;
            case "nameZA"   : filteredTrips.sort((a,b)=>b.name >= a.name?1:-1);break;  
            default:break;    
        }
        filteredTrips = filteredTrips.map(trip => {return (<TripItem unit={props.unit} trip={trip} key={trip.id}/>)}
        );
return <>
<Helmet><title>All Trips</title></Helmet>
<SearchBar tripDifficulty={tripDifficulty?tripDifficulty:""}length={length} setLength={setLength} setSearchWord={setSearchWord} setSortType={setSortType}  />
    <Row>
    {filteredTrips}
    </Row>
 
</>}

export default TripList;