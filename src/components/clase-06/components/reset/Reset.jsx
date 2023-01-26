import React from "react";
import { BiReset } from "react-icons/bi";
import { TYPES } from "../../actionsTypes/countActions";
import { useCountContext } from "../../context/countContext";

const Reset = () => {

    const {dispatch} = useCountContext();
    const handleReset = () => dispatch({type: TYPES.RESET})
    
    return (
        <>
            <BiReset
                color="rgba(128, 0, 128)" 
                size='38px' 
                cursor="pointer"
                onClick={handleReset}
            />
        </>
    )
}

export default Reset;