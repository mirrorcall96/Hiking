import { useState } from 'react';
import { Helmet } from 'react-helmet';
import {Row} from "react-bootstrap"
import TripItem  from './tripItem.js';
import SearchBar from './SearchBar'
import _trips from '../trips';

const TripList = (props) =>{
    const [order ,setOrder ]= useState(false);
    let newArray = props.trips.map(trip => {return (<TripItem unit={props.unit} trip={trip} key={trip.id}/>)}
    );
    const setQuery = (q)=>{
        q=q?q:""
         q=q.toLowerCase();
        let temp = _trips.filter(trip=>trip.name.toLowerCase().includes(q) || trip.city.toLowerCase().includes(q))
        props.setTrip(temp)
    }
    const setDifficulty = (q)=>{
        let temp = _trips.filter(trip=>trip.difficulty===q || q==="")
        props.setTrip(temp)
    }
    const orderList = (q)=>{
        let temp
        if(q)
            temp = _trips.sort((a,b)=>a.length-b.length)
        else 
            temp = _trips.sort((a,b)=>b.length-a.length)
        setOrder(q);
        props.setTrip([...temp])
    }

return <>
<Helmet><title>All Products</title></Helmet>
<SearchBar order={order}  setQuery={setQuery} setDifficulty={setDifficulty} orderList={orderList}  />
    <Row>
    {newArray}
    </Row>
 
</>}

export default TripList;