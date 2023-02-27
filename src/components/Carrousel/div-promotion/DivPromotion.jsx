import React from "react";
import styled from "styled-components";

const StyledPromotion = styled.div `
    height: 42px;
    overflow: hidden; 
    width: 100%;


    
    @media (max-width: 600px){
        height: 25px;
    }

`
const StyledPromotionMove = styled.div `
    animation: slider-promotion 40s infinite alternate linear;
    display: flex;
    width: 400%;
    height: 100%;

    @media (max-width: 480px) {
        width: 600%;
    }
    
`
const DivPromotion = ( props) => {
    return (
        
        <StyledPromotion> 
            <StyledPromotionMove>
                {props.children}
            </StyledPromotionMove>    
        </StyledPromotion>
        
        
    )
}

export default DivPromotion