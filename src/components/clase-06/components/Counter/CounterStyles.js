import styled from "styled-components";

export const BodyStyled = styled.div `
    background-color: #252525;
`


export const CounterContainerStyled = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 30px;

    @media screen and (max-width: 766px) {
        width: 100% ;
    }

`

export const CounterSpanStyled = styled.span `
    padding: 10px;
    width: 100px;
    font-size: 30px;
    text-align: center;

`





export const CounterButtonsContainerStyled = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    & p{
        display: flex;
        align-items: center;
        margin: 0;
        font-size: 20px;
        color:  rgba(128, 0, 128);
    }
`