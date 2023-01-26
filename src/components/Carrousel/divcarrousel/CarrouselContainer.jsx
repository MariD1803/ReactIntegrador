import React from "react";
import styled from "styled-components";



const StyledDivContainer = styled.div `
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    border-bottom: grey 2px solid;
`

const CarrouselContainer = ( props) => {
    return (
        <>
        <StyledDivContainer> {props.children}</StyledDivContainer>
        
        </>
        
        
        
    )
}

export default CarrouselContainer