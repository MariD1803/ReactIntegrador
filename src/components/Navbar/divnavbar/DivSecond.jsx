import React from "react";
import styled from "styled-components"

const StyledDiv = styled.nav `
    display: flex;
    align-content: center;
    flex-direction: row;
    height: 100%;
    align-items: center;
    width: 200px;
    justify-content: space-around;
    padding-right: 1rem;

    @media (max-width: 2700px) {
        width: 150px;
    }
`

 
const Div = ({children}) => {
    return (
        <StyledDiv> {children} </StyledDiv>
    )
}

export default Div