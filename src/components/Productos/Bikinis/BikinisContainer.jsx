import React from "react"
import { productDataBikinis } from "./data";
import Productos from "../Productos";



const BikinisContainer = ( ) => {
    const productos = productDataBikinis.map((item) => (
            
          <Productos
          bc={item.color}
          name={item.name}
          url={item.imageurl}
          price={item.price}
          description={item.description}
          IsTalla={item.IsTalla}
        >
            <p className="p-buttons">                                
                {
                item.tallas.map((numero) => {                
                return <button className="product-button-talla">{numero}</button> || []}
                )}
            </p>
        </Productos>
    ));
    return (
        <div className="TopsContainer">
            {productos}
            
        </div>
        
    )
}

export default BikinisContainer