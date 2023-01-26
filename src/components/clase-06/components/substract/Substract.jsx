import React from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { FiDivideCircle } from "react-icons/fi";
import { RiNumber5 } from "react-icons/ri";
import { TYPES } from "../../actionsTypes/countActions";
import { useCountContext } from "../../context/countContext";
import ButtonStyled from "../button/ButtonStyled";


const Substract = () => {

    const {dispatch} = useCountContext();

    const handleDecrement = () => dispatch({type: TYPES.DECREMENT})
    const handleDecrement5 = () => dispatch({type: TYPES.DECREMENT_5})
    const handleDivide = () => dispatch({type: TYPES.DIVIDE})
   
    return (
        <>
            <ButtonStyled left onClick={handleDivide}> 
                <p>
                    <FiDivideCircle/>
                </p>
            </ButtonStyled>
                


            <ButtonStyled left onClick={handleDecrement5}> 
                <p>
                   - <RiNumber5/>
                </p>
            </ButtonStyled>

            <ButtonStyled left onClick={handleDecrement}> 
                <AiOutlineMinusCircle color="rgba(128, 0, 128)" size='32px'/>
            </ButtonStyled>
        </>
    )
}

export default Substract;