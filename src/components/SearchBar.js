import {Form,Col,ToggleButton,ButtonGroup} from "react-bootstrap";
const SearchBar = (props) => {
  return (
    <Form.Row>
      <Form.Group as={Col}> <Form.Control onChange={(event) =>props.setQuery(event.target.value) } placeholder="Search"/> </Form.Group>
    <Form.Group as={Col}>
    <Form.Control onChange={(event) =>props.setDifficulty(event.target.value) } as="select" 
    >
        <option></option>
        <option>easy</option>
        <option>meduim</option>
        <option>hard</option>      
      </Form.Control>
    </Form.Group>
    <Form.Group as={Col}>
    <ButtonGroup toggle className="mb-2">
      <ToggleButton type="checkbox" variant="primary" checked={props.order} onChange={(event)=>props.orderList(event.currentTarget.checked)}>Sort</ToggleButton>
      </ButtonGroup>
    </Form.Group>
    </Form.Row>
  );
};

export default SearchBar;