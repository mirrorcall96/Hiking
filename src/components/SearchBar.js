import {Form,Col} from "react-bootstrap";
const SearchBar = (props) => {
  return (
    <Form.Row>
      <Form.Group as={Col}>Search : <Form.Control onChange={(event) =>{props.setSearchWord(event.target.value);props.update(event.target.value,null,null)} } placeholder="Search"/> </Form.Group>
    <Form.Group as={Col}>
      Diffuculty : 
    <Form.Control onChange={(event) =>{props.setDifficultyLevel(event.target.value);props.update(null,event.target.value,null)} } as="select" 
    >
        <option></option>
        <option>easy</option>
        <option>meduim</option>
        <option>hard</option>      
      </Form.Control>
    </Form.Group>
    <Form.Group as={Col}>
      Sort by:
    <Form.Control onChange={(event) =>{props.setSortType(event.target.value);props.update(null,null,event.target.value)} } as="select" 
    >
        <option value="reset"></option>
        <option value="length19">Length : 1-9</option>
        <option value="length91">Length : 9-1</option>
        <option value="nameAZ">Name : A-Z</option>
        <option value="nameZA">Name : Z-A</option>
      </Form.Control>
    </Form.Group>
    </Form.Row>
  );
};

export default SearchBar;