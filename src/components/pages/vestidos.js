import React from "react"
import DivContainerProducts from "../Productos/DivContainerProducts"
import VestidosContainer from "../Productos/Vestidos/VestidosContainer"
import "../Productos/Productos.css"


const Vestidos = ( ) => {
    return (
        <div className="div-principal">
            
            <DivContainerProducts section="Vestidos">

            <VestidosContainer></VestidosContainer>

            </DivContainerProducts>
        </div>
        
    )
}

export default Vestidos