import React, { useState } from 'react'
import { IconCart } from '../Navbar/iconos/Iconos';
import Productos from '../Productos/Productos';

const Wraper = (props) => 
    {
        const [allProducts, setAllProducts] = useState(JSON.parse(localStorage.getItem("cartContainer")) || []);    
        let countCon = localStorage.getItem('countContainer') || 0
        let totalCon = JSON.parse(localStorage.getItem('totalContainer')) || 0
    
        const onAddProduct = product => {
            let isProductAdded = allProducts.find(item => item.id === product.id)
            if (isProductAdded ) {
                let products = allProducts
                for(let item of products){
                    if (item.id === product.id){
                        item.quantity++
                        break
                    }
                }
                let resultsCount =  parseInt(countCon) + 1
                let resultsTotal =  parseInt(totalCon) +  parseInt(product.price)
                localStorage.setItem("countContainer", JSON.stringify(resultsCount))
                localStorage.setItem("totalContainer", JSON.stringify(resultsTotal))
                setAllProducts([...products]);
                updateCartStorage()
                return
            }
            product.quantity = 0
            allProducts.push(product)
            onAddProduct(product)
            let resultsCount =  parseInt(countCon) + 1
            let resultsTotal =  parseInt(totalCon) +  parseInt(product.price)
            localStorage.setItem("countContainer", JSON.stringify(resultsCount))
            localStorage.setItem("totalContainer", JSON.stringify(resultsTotal))
    
           
        };
        
        const updateCartStorage = () => {
            localStorage.removeItem("cartContainer")
            localStorage.setItem("cartContainer",JSON.stringify(allProducts))
        }
    
        const onSelectTalla = (item, numero )=> {        
            item.selectedTalla = numero
            
        }
    const productos = props.items.map((item, index) => (
        <li key={item.id+1}>
            <Productos key={item.id}
            bc={item.color}
            name={item.name}
            url={item.imageurl}
            price={item.price}
            pricebefore={item.pricebefore}
            description={item.description}
            IsTalla={item.IsTalla}
            itemcolorbc={item.colorbc}
            IsSale={item.IsSale}
            signo={item.signo}
            > 
            <div className="p-buttons">                                
                {
                item.tallas.map((numero) => {                
                return <button key={numero+item.id} className="product-button-talla" onClick={() => onSelectTalla(item, numero)}>{numero}</button> || []}
                )}
            </div>

            <button className="cart-button"  onClick={() => onAddProduct(item)} ><IconCart className="cartProductP" ></IconCart></button>
        </Productos>
      </li>
  ));

    

  return (
    <div className="TopsContainer">
        <h1>Página: {props.currentPage}</h1>

        <button onClick={props.prevHandler}>Prev</button>
        <button onClick={props.nextHandler}>Next</button>

        <ul>
           
            
            {productos}
            
        </ul>

    </div>
  )
}

export default Wraper