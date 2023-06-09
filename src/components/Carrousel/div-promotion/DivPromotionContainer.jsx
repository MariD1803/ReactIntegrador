import React from "react";
import styled from "styled-components";



const StyledDivPromotionContainer = styled.div `
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: row;
    border-bottom: grey 2px solid;
    background-color: var(--blue);
    justify-content: space-between;
`

const StyledH2PromotionContainer = styled.h2 `
    color: white;
    font-family: "cursiva";
    font-size: 1.1vw;
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0 10px;
    @media (max-width: 480px) {
    font-size: 1.8vw;
    }


`

const PromotionContainer = ( ) => {
    return (
        <>
        <StyledDivPromotionContainer> 
            <StyledH2PromotionContainer>💫| RENUEVA TUS LOOKS CON LA MODA |💫</StyledH2PromotionContainer>
            <StyledH2PromotionContainer>🔥 ¡¡SUPER DESCUENTOS!! 🔥</StyledH2PromotionContainer>
            <StyledH2PromotionContainer>💫| RENUEVA TUS LOOKS CON LA MODA |💫</StyledH2PromotionContainer>
            <StyledH2PromotionContainer>🔥 ¡¡SUPER DESCUENTOS!! 🔥</StyledH2PromotionContainer>
        </StyledDivPromotionContainer>
        
        </>
        
        
        
    )
}

export default PromotionContainer