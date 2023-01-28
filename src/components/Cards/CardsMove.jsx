import React from "react";
import styled from "styled-components";


const StyledDivCardsMove = styled.div `
    width: 90%;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5vw;
    padding: 0 3rem;
    height: 100%;
    display: flex;
    
`

const CardsMove = ( props) => {
    return (
        <>
        
        <StyledDivCardsMove>  {props.children}  </StyledDivCardsMove>
        
        </>
        
        
        
    )
}

export default CardsMove