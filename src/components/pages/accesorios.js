import React from "react"
import DivContainerProducts from "../Productos/DivContainerProducts"
import AccesoriosContainer from "../Productos/Accesorios/AccesoriosContainer"
import "../Productos/Productos.css"


const Accesorios = ( ) => {
    return (
        <div className="div-principal">
            
            <DivContainerProducts section="Accesorios">

            <AccesoriosContainer></AccesoriosContainer>

            </DivContainerProducts>
        </div>
        
    )
}

export default Accesorios