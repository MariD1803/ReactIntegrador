import React from "react";
import { CounterButtonStyled } from "./BtnStyled";


const ButtonStyled = ({children, onClick, left}) => {

    return (
        <CounterButtonStyled left={left} onClick={onClick}>
            {children}
        </CounterButtonStyled>
    )
}

export default ButtonStyled;