import React from "react"
import { productDataTops } from "./data";
import Productos from "../Productos";
import { IconCart } from "../../Navbar/iconos/Iconos";
import { useLocalStorage } from "../../../hooks/useLocalStorage";


const TopsContainer = ( {allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal, 
    handleClick, countTimes}) => {
        const [cartContainer, setCart] = useLocalStorage('cartContainer', localStorage.getItem('cartContainer'))
        const [totalContainer, setTotalContainer] = useLocalStorage('totalContainer', localStorage.getItem('totalContainer'))
        const [countContainer, setCountContainer] = useLocalStorage('countContainer', localStorage.getItem('countContainer'))
         

        


    const onAddProduct = (product, isCartEvent, isAddedFromCartButton = false ,isLastElement = false) => {
        
       

        if(isCartEvent && product.selectedTalla === undefined) return alert("Debe elegir una talla")

        if (isCartEvent && !allProducts.find(item => item.id === product.id)){
            if (allProducts.length >= 1) {
                countProducts = countProducts             
                product.quantity = 0
                allProducts.push(product)
            
                 return onAddProduct(product,isCartEvent)
            }
            countTimes =0
            countProducts = 1
            product.quantity = 0
            allProducts.push(product)
            
            return onAddProduct(product,isCartEvent)
        }

        if (isAddedFromCartButton){                 
            product.isAddedFromCartButton = true
        }

        let sumando = isCartEvent ? 1 : 0
        
        console.log("count: "+ countTimes)
        if (countTimes >= 1 ) {
            console.log("Entro en este if???")
            countProducts = countProducts + 1
        }
       
        if ( isCartEvent && allProducts.find(item => item.id === product.id)){
            
            const products = allProducts.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + sumando }
                    : item
            );
            setTotal(parseInt(total) + parseInt(product.price));
            
            setCountProducts( countProducts) ///Para que la burbuja cuente
            
            setAllProducts([...products])
            return;
        }


      

    }    
        

    const onSelectTalla = (item, numero )=> {        
        item.selectedTalla = numero
        
    }


    const productos = productDataTops.map((item) => (
        
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

            <button className="cart-button"  onClick={() =>{ handleClick(); onAddProduct(item, true, true); setCart(allProducts); setTotalContainer(total); setCountContainer(countProducts)}} ><IconCart className="cartProductP" ></IconCart></button>
        </Productos>
    ));
    return (
        <div className="TopsContainer">
             <div  className="hola"
                
                >{JSON.stringify(cartContainer)}
                {JSON.stringify(totalContainer)}
                {JSON.stringify(countContainer)}</div>
            
            {productos}
            
        </div>
        
    )
}

export default TopsContainer

