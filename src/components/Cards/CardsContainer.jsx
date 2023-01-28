import React from "react";
import styled from "styled-components";
import { AiOutlineLeft,  AiOutlineRight } from "react-icons/ai";


const iconStyle = {
    fontWeight: "900",
    fontSize: "32px",
    color: "black",
};

const StyledDivCards = styled.div `
    width: 80vw;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0 3rem;    
    overflow: hidden; 
`

const CardsContainer = ( props) => {
    return (
        <>
         
        <StyledDivCards> <AiOutlineLeft style={iconStyle}/> {props.children}  < AiOutlineRight   style={iconStyle}/></StyledDivCards>
        
        </>
        
        
        
    )
}

export default CardsContainer