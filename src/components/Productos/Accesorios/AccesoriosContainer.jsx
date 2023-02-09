import React from "react"
import { productDataAccesorios } from "./data";
import Productos from "../Productos";



const AccesoriosContainer = ( ) => {
    const productos = productDataAccesorios.map((item) => (
            
          <Productos
          bc={item.color}
          name={item.name}
          url={item.imageurl}
          price={item.price}
          description={item.description}
          IsTalla={item.IsTalla}
          itemcolorbc={item.colorbc}
          IsSale={item.IsSale}
          signo={item.signo}
          pricebefore={item.pricebefore}
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

export default AccesoriosContainer