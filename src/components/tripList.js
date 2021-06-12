import { useState ,useEffect} from 'react';
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
    let tripDifficulty=useParams().tripDifficulty;
    tripDifficulty=tripDifficulty?tripDifficulty:"";
    
    let newArray = props.trips.filter(trip=>!tripDifficulty || trip.difficulty===tripDifficulty).map(trip => {return (<TripItem unit={props.unit} trip={trip} key={trip.id}/>)}
    );
    const update =()=>{

    }
    useEffect(() => {
        let temp =[..._trips];
        temp = temp.filter(trip=>trip.name.toLowerCase().includes(searchWord.toLowerCase()) || trip.city.toLowerCase().includes(searchWord.toLowerCase()));
        temp = temp.filter(trip=>trip.length <= length);
        temp = temp.filter(trip=>trip.difficulty===tripDifficulty || tripDifficulty==="")
        if(sortType==="length19")
            temp = temp.sort((a,b)=>a.length-b.length)
        else if (sortType==="length91")
            temp = temp.sort((a,b)=>b.length-a.length)
        else if (sortType==="nameAZ")
            temp = temp.sort((a,b)=>b.name >= a.name?-1:1)
        else if (sortType==="nameZA")
            temp = temp.sort((a,b)=>b.name >= a.name?1:-1)
        props.setTrip(temp)
    }, [props,searchWord,tripDifficulty,sortType,length]);
    console.log(tripDifficulty)
return <>
<Helmet><title>All Trips</title></Helmet>
<SearchBar tripDifficulty={tripDifficulty?tripDifficulty:""}length={length} setLength={setLength} setSearchWord={setSearchWord} setSortType={setSortType} update={update}  />
    <Row>
    {newArray}
    </Row>
 
</>}

export default TripList;