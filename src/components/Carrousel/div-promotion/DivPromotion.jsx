import React from "react";
import styled from "styled-components";

const StyledPromotion = styled.div `
    height: 40px;
    overflow: hidden; 
    width: 100%;

`
const StyledPromotionMove = styled.div `
    animation: slider-promotion 40s infinite alternate linear;
    display: flex;
    width: 400%;
    height: 100%;
    
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