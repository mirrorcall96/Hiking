import styled, { createGlobalStyle } from "styled-components";
import { Link} from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${props=>props.theme[0]};
    color: ${props=>props.theme[1]};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
export const NavLink = styled(Link)`
  &.active {
    color:black
  }
`

export const theme = {
    mainColor: "white",
    backgroundColor :"white"
  };
  
export const Title = styled.div`
    margin: auto;
    text-align: center;
`;
  
export const SearchBarStyled = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
`;
export const ShopImage = styled.img`
    width: 50%;
`;
export const Card = styled.div`
    &:hover {
      cursor: pointer;
    }
    max-width: 300px;
    margin: auto;
    text-align: center;
    font-family: arial;
    display: inline-block;
    p{
      color: grey;font-size: 22px;
    }
    h3 {color: black;font-size: 22px;}
    img{width: 100%;}
`;