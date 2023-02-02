import styled from "styled-components"



const StyledH2 = styled.h2 `
font-family: "cursive";
font-size: 6vh;

@media (max-width: 480px) {
    font-size: 4vh;
}
`

const StyledDivCont = styled.div `
    display: flex;
    align-items: center;
    width: 100%;
    padding: 3rem;
    margin-top: 2rem;    
    justify-content: center;
`

const CardTitulo = ( props) => {
    return (
        <StyledDivCont>
            <StyledH2>{props.title}</StyledH2>
        </StyledDivCont>
        
        
    )
}

export default CardTitulo