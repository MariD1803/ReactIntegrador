import React from "react";
import styled from "styled-components";
import { IconCart } from "../Navbar/iconos/Iconos";
import "./Productos.css"

const StyledButton = styled.button `
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    margin-bottom: 1rem;
    border: grey solid 1px;

`

const StyledDiv = styled.div `
    flex-direction: row;    
    justify-content: space-between;
    display: flex;
    margin-top: 1rem;
    width: 100%;

`
const StyledDivTalla = styled.div `
  gap: 10px;
  display: flex;
  flex-direction: row;
  width: 100%;
`

const StyledDivContent = styled.div `
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 1rem;
  width: 100%;

`
export default function Productos(props) {


  return (
    <div className="cardProduct">
      <img className="cardProductImagen" src={props.url} alt="product img" />
      <StyledDivContent>
      <h3 className="h3">{props.name}</h3>
      
      <StyledDiv> 
        <StyledDivTalla>
          <p>{props.IsTalla}</p>
          {props.children}
        </StyledDivTalla>
        <StyledButton className={"background-"+props.bc}>  </StyledButton>
      </StyledDiv>
     
      <StyledDiv><p className="priceProduct">{props.price}</p> <IconCart className="cartProductP"></IconCart></StyledDiv>



      </StyledDivContent>
    </div>
  );
}