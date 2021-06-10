import { useState } from 'react';
import { Helmet } from 'react-helmet';
import {Row} from "react-bootstrap"
import TripItem  from './tripItem.js';
import SearchBar from './SearchBar'
import _trips from '../trips';

const TripList = (props) =>{
    const [searchWord ,setSearchWord ]= useState("");
    const [difficultyLevel ,setDifficultyLevel ]= useState("");
    const [sortType ,setSortType ]= useState("");
    let newArray = props.trips.map(trip => {return (<TripItem unit={props.unit} trip={trip} key={trip.id}/>)}
    );
    const update = (a,b,c) =>{
        let mySearch = a!==null?a:searchWord;
        let myDifficulty = b!==null?b:difficultyLevel;
        let mySort=c!==null?c:sortType;
        let temp =[..._trips];
        mySearch=mySearch.toLowerCase();
        temp = temp.filter(trip=>trip.name.toLowerCase().includes(mySearch) || trip.city.toLowerCase().includes(mySearch));
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
<Helmet><title>All Products</title></Helmet>
<SearchBar setSearchWord={setSearchWord} setDifficultyLevel={setDifficultyLevel} setSortType={setSortType} update={update}  />
    <Row>
    {newArray}
    </Row>
 
</>}

export default TripList;