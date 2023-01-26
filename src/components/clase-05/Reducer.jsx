import React, { useContext, useReducer } from "react";
import styled from "styled-components";
import { Contexto } from "./MiContexto";

const Title = styled.h1 `
    color: ${props => props.color};
`

const Button = styled.button `
    background-color: ${props => props.bg};
    padding: 1rem 4rem;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    border: none;
`

const Reducer = () => {

    const initialState = ''

    const {colorRed, colorGreen, colorBlue, title} = useContext(Contexto);

    const reducer = (state, action) => {
        switch (action.type) {
            case 'rojo':
                return colorRed;
            case 'verde':
                return colorGreen;
            case 'azul':
                return colorBlue;
            default:
                return state;
        }
    }

    const [color, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <Title color={color}> {title} </Title>
            
            <Button bg={colorRed}
            onClick={()=> dispatch ({type:'rojo'})}>Rojo</Button>
            
            <Button bg={colorGreen}
            onClick={()=> dispatch ({type:'verde'})}>Verde</Button>
            
            <Button bg={colorBlue}
            onClick={()=> dispatch ({type:'azul'})}>Azul</Button>
        </>
    )
}

export default Reducer;