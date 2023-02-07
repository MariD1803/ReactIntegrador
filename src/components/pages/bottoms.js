import React from "react"
import DivContainerProducts from "../Productos/DivContainerProducts"
import BottomsContainer from "../Productos/Bottoms/BottomsContainer"
import "../Productos/Productos.css"


const Bottoms = ( ) => {
    return (
        <div className="div-principal">
            
            <DivContainerProducts section="Bottoms">

            <BottomsContainer></BottomsContainer>

            </DivContainerProducts>
        </div>
        
    )
}

export default Bottoms

