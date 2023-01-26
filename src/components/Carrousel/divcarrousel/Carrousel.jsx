import React from "react";
import styled from "styled-components";

const StyledCarrousel = styled.div `
    height: 80vh;
    overflow: hidden; 
    width: 100%;

    @media (max-width: 767px){
        height: 500px;
    }
`
const StyledCarrouselMove = styled.div `
    animation: slider 20s infinite alternate linear;
    display: flex;
    width: 400%;
    height: 100%;

    
`
const Carrousel = ( props) => {
    return (
        
        <StyledCarrousel> 
            <StyledCarrouselMove>
                {props.children}
            </StyledCarrouselMove>    
        </StyledCarrousel>
        
        
    )
}

export default Carrousel