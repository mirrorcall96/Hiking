import {Form,Col} from "react-bootstrap";
import RangeSlider from 'react-bootstrap-range-slider';
import { Link} from "react-router-dom";
import { useHistory } from "react-router";
const SearchBar = (props) => {
  let history=useHistory();
  return (
    <Form.Row>
      <Form.Group as={Col}>Search : <Form.Control onChange={(event) =>{props.setSearchWord(event.target.value);props.update(event.target.value,null,null,null)} } placeholder="Search"/> </Form.Group>
    <Form.Group as={Col}>
      Diffuculty : 
    <Form.Control onChange={(event) =>{history.push("/trips/"+event.target.value);props.setDifficultyLevel(event.target.value);props.update(null,event.target.value,null,null)} } as="select" 
    >
        <option></option>
        <option selected={props.tripDifficulty==="easy"?"selected":""}>easy</option>
        <option selected={props.tripDifficulty==="meduim"?"selected":""}>meduim</option>
        <option selected={props.tripDifficulty==="hard"?"selected":""}>hard</option>      
      </Form.Control>
    </Form.Group>
    <Form.Group as={Col}>
      Sort by:
    <Form.Control onChange={(event) =>{props.setSortType(event.target.value);props.update(null,null,event.target.value,null)} } as="select" 
    >
        <option value="reset"></option>
        <option value="length19">Length : 1-9</option>
        <option value="length91">Length : 9-1</option>
        <option value="nameAZ">Name : A-Z</option>
        <option value="nameZA">Name : Z-A</option>
      </Form.Control>
    </Form.Group>
    <Form.Group as={Col}>
      Trip Length
      <RangeSlider max="25" value={props.length} onChange={changeEvent =>{props.setLength(changeEvent.target.value);props.update(null,null,null,changeEvent.target.value)}}/>
    </Form.Group>
    </Form.Row>
  );
};

export default SearchBar;