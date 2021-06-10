import { useState } from 'react';
import {useParams} from 'react-router-dom'
import { Helmet } from 'react-helmet';
import {Row} from "react-bootstrap"
import TripItem  from './tripItem.js';
import SearchBar from './SearchBar'
import _trips from '../trips';

const TripList = (props) =>{
    const [searchWord ,setSearchWord ]= useState("");
    const [difficultyLevel ,setDifficultyLevel ]= useState("");
    const [sortType ,setSortType ]= useState("");
    const [length ,setLength ]= useState(20);
    let tripDifficulty=useParams().tripDifficulty;
    
    let newArray = props.trips.filter(trip=>!tripDifficulty || trip.difficulty===tripDifficulty).map(trip => {return (<TripItem unit={props.unit} trip={trip} key={trip.id}/>)}

    );
    const update = (a,b,c,d) =>{
        let mySearch = a!==null?a:searchWord;
        let myDifficulty = b!==null?b:(tripDifficulty?tripDifficulty:difficultyLevel);
        let mySort=c!==null?c:sortType;
        let myLength=d!==null?d:length;
        console.log(mySearch,myDifficulty,mySort,myLength)
        let temp =[..._trips];
        mySearch=mySearch.toLowerCase();
        temp = temp.filter(trip=>trip.name.toLowerCase().includes(mySearch) || trip.city.toLowerCase().includes(mySearch));
        temp = temp.filter(trip=>trip.length <= myLength);
        temp = temp.filter(trip=>trip.difficulty===myDifficulty || myDifficulty==="")
        if(mySort==="length19")
            temp = temp.sort((a,b)=>a.length-b.length)
        else if (mySort==="length91")
            temp = temp.sort((a,b)=>b.length-a.length)
        else if (mySort==="nameAZ")
            temp = temp.sort((a,b)=>b.name >= a.name?-1:1)
        else if (mySort==="nameZA")
            temp = temp.sort((a,b)=>b.name >= a.name?1:-1)
        props.setTrip(temp)
    }
    //console.log(searchWord,difficultyLevel,sortType);

return <>
<Helmet><title>All Trips</title></Helmet>
<SearchBar tripDifficulty={tripDifficulty?tripDifficulty:""}length={length} setLength={setLength} setSearchWord={setSearchWord} setDifficultyLevel={setDifficultyLevel} setSortType={setSortType} update={update}  />
    <Row>
    {newArray}
    </Row>
 
</>}

export default TripList;