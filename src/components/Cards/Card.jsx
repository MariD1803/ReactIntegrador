import React from "react";
import styled from "styled-components";



const StyledDivCard = styled.div `
    width: 20vw;
    height: 40vh;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 2px;
`

const Card = ( props) => {
    return (
        <>
        <StyledDivCard className={props.className}> {props.children}</StyledDivCard>
        
        </>
        
        
        
    )
}

export default Card