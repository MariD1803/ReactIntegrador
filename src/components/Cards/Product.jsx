import React from "react";
import styled from "styled-components";


const StyledButton = styled.button `
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    margin-left: 46%;
    margin-bottom: 1rem;
    border: grey solid 1px;

`



export default function Product(props) {
  
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product img" />
      <h3 className="h3">{props.name}</h3>
      <p className="price">{props.price}</p>
      <StyledButton className={"background-"+props.bc}>  </StyledButton>
      <p className="p" >
        <button className="button">Comprar</button>
      </p>
    </div>
  );
}