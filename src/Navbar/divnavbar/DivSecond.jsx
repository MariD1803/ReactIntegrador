import React from "react";
import styled from "styled-components"

const StyledDiv = styled.nav `
    display: flex;
    align-content: center;
    flex-direction: row;
    height: 100%;
    align-items: center;
    width: 132px;
    justify-content: space-around;
    padding-right: 1rem;
`

 
const Div = ({children}) => {
    return (
        <StyledDiv> {children} </StyledDiv>
    )
}

export default Div