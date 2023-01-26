import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaRegTimesCircle } from "react-icons/fa";
import { RiNumber5 } from "react-icons/ri";
import { TYPES } from "../../actionsTypes/countActions";
import { useCountContext } from "../../context/countContext";
import ButtonStyled from "../button/ButtonStyled";

const Add = () => {

    const {dispatch} = useCountContext();

    
    const handleIncrement = () => dispatch({ type: TYPES.INCREMENT})
    const handleIncrement5 = () => dispatch({type: TYPES.INCREMENT_5})
    const handleMultiply = () => dispatch({type: TYPES.MULTIPLY})
  
    return (
        <>
            <ButtonStyled onClick={handleIncrement}>
                <AiOutlinePlusCircle color="rgba(128, 0, 128)" size='32px'/>
            </ButtonStyled>

            <ButtonStyled onClick={handleIncrement5}> 
                    <p>
                        + <RiNumber5/>
                    </p>
            </ButtonStyled>


            <ButtonStyled onClick={handleMultiply}> 
                <p>
                    <FaRegTimesCircle/>
                </p>
            </ButtonStyled>

        </>
    )
}

export default Add;