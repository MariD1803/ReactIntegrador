import React from "react"
import DivContainerProducts from "../Productos/DivContainerProducts"
import TopsContainer from "../Productos/Tops/TopsContainer"
import "../Productos/Productos.css"


const Tops = ( ) => {
    return (
        <div className="div-principal">
            
            <DivContainerProducts section="Tops">

            <TopsContainer></TopsContainer>

            </DivContainerProducts>
        </div>
        
    )
}

export default Tops