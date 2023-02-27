import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const StyledButton = styled.button `
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    margin-bottom: 1rem;
    border: grey solid 1px;

`
const StyledDivTalla = styled.div `
  gap: 10px;
  display: flex;
  flex-direction: row;
`


const StyledDiv = styled.div `
    flex-direction: row;    
    justify-content: space-between;
    display: flex;
    margin-top: 1rem;
    width: 100%;
    padding: 1rem;

`

const StyledP = styled.p `

  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 25px;  

  @media (max-width: 2700px) {
    font-size: 14px; 
  }

`


export default function Product(props) {
  
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product img" />
      <h3 className="h3">{props.name}</h3>
      <p className="price">{props.price}</p>
      
      <StyledDiv> 
        <StyledDivTalla>
          <StyledP>{props.IsTalla}</StyledP>
          {props.children}
        </StyledDivTalla>
        <StyledButton className={"background-"+props.bc}>  </StyledButton>
      </StyledDiv>

      <div className="p" >
      <Link to={"/"+props.description}><button className="button">Comprar</button></Link>
      </div>
    </div>
  );
}