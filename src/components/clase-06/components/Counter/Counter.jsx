import React from "react";
import { CounterContainerStyled, CounterSpanStyled, CounterButtonsContainerStyled } from "./CounterStyles";
import { useCountContext } from "../../context/countContext";
import Add from "../add/Add";
import Substract from "../substract/Substract";
import Reset from "../reset/Reset";

const Counter = () => {
   /*  const [count, setCount] = useState(0)

    const handleDecrement = () => {
        setCount(count -1 )
    }

    const handleIncrement =()=> {
        setCount(count +1)
    } */

    /* const [state1, dispatch] = useReducer(counterReducer, counterInitialState) */

    const {state} = useCountContext();

    
    
    
   

    return (
        <CounterContainerStyled>

            <CounterButtonsContainerStyled>

                <Substract/>
                
                <CounterSpanStyled>{state.count}</CounterSpanStyled>
                
                <Add></Add>
            </CounterButtonsContainerStyled>  

            <Reset/>
                         
            
        </CounterContainerStyled>
    )
}

export default Counter;