import React from "react"
import DivContainerProducts from "../Productos/DivContainerProducts"
import BikinisContainer from "../Productos/Bikinis/BikinisContainer"
import "../Productos/Productos.css"


const Bikinis = ( ) => {
    return (
        <div className="div-principal">
            
            <DivContainerProducts section="Bikinis">

            <BikinisContainer></BikinisContainer>

            </DivContainerProducts>
        </div>
        
    )
}

export default Bikinis