import React from "react"
import DivContainerProducts from "../Productos/DivContainerProducts"
import TopsContainer from "../Productos/Tops/TopsContainer"



const Tops = ( ) => {
    return (
        <div>
            <h2> Hola esta es mi página de productos</h2>
            
            <DivContainerProducts section="Tops">

            <TopsContainer></TopsContainer>

            </DivContainerProducts>
        </div>
        
    )
}

export default Tops