import React, {useEffect}from "react"
import { productDataTops } from "./data";
import Productos from "../Productos";
import { IconCart } from "../../Navbar/iconos/Iconos";
import { useLocalStorage } from "../../../hooks/useLocalStorage";




const TopsContainer = ( {
    allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal}) => {
        const [cartContainer, setCart] = useLocalStorage('cartContainer', localStorage.getItem('cartContainer'))
        const [totalContainer, setTotalContainer] = useLocalStorage('totalContainer', localStorage.getItem('totalContainer'))
        const [countContainer, setCountContainer] = useLocalStorage('countContainer', localStorage.getItem('countContainer'))
        const updateLsCart = () => {
            localStorage.setItem("cartContainer", JSON.stringify(allProducts))
            localStorage.setItem("totalContainer", JSON.stringify(total))
            localStorage.setItem("countContainer", JSON.stringify(countContainer))
        }

var isRepeated = false

    /* useEffect(() => {
        if (!isRepeated) {
            isRepeated = true
            let productsQty= allProducts.length           
            for (let i in allProducts){                
                let isLast = false
                if (i === productsQty - 1  ){
                    
                    isLast = true
                }
                onAddProduct(allProducts[i],false, false, isLast)
            }
        }
    }, []); */

    const onAddProduct = (product, isCartEvent, isAddedFromCartButton = false ,isLastElement = false) => {
        console.log("Donde suma el +1???")
        
        
        if(isCartEvent && product.selectedTalla === undefined) return alert("Debe elegir una talla")

        if (isCartEvent && !allProducts.find(item => item.id === product.id)){
            
            allProducts.push(product)
            return onAddProduct(product,isCartEvent)
        }

        if (isAddedFromCartButton){                 
            product.isAddedFromCartButton = true
        }

        let sumando = isCartEvent ? 1 : 0


        if (isLastElement && product.isAddedFromCartButton) {
            sumando = +1
        }

        

        if ( isCartEvent && allProducts.find(item => item.id === product.id)){
            const products = allProducts.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + sumando }
                    : item
            );
            setTotal(parseInt(total) + parseInt(product.price));
            
            setCountProducts( countProducts + 1) ///Para que la burbuja cuente
            
            setAllProducts([...products])
                
            console.log("Segundo if: "+ String(setAllProducts([...products])))
            return  ;
        }


        console.log("Alguna vez entra aqui???")
        let totalAccount = isCartEvent? parseInt(total) + parseInt(product.price) : parseInt(total) + product.price * product.quantity
        setTotal(totalAccount);
        let productQty = isCartEvent? (countProducts + 1) : (countProducts + product.quantity)
        setCountProducts(productQty) 
        return ;

    }    
        //setTotal(total + product.price * product.quantity);
        //setCountProducts( countProducts + product.quantity) ///Para que la burbuja cuente
        //setAllProducts([...allProducts, product]);
        //return updateLsCart()
    
    /*
        if((product.selectedTalla !== undefined && isCartEvent) || !isCartEvent){
            if (allProducts.find(item => item.id === product.id)) {  //Comparo si mi producto ya existe, entonces le agrego mas cantidad
                const products = allProducts.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + sumando }
                        : item
                );
                setTotal(parseInt(total) + parseInt(product.price));
                setCountProducts( countProducts + 1) ///Para que la burbuja cuente
                setAllProducts([...products])
                return  updateLsCart();
            }
            console.log("Total:"+total)
            setTotal(total + product.price * product.quantity);
		    setCountProducts(countProducts + product.quantity);   ///Para que la burbuja cuente
		    setAllProducts([...allProducts, product]);
            updateLsCart()
            
        }  else {
            alert("Debe elegir una talla");
        }
        
        
    }
    */

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

            <button className="cart-button"  onClick={() =>{ onAddProduct(item, true, true); setCart(allProducts); setTotalContainer(total); setCountContainer(countProducts)}} ><IconCart className="cartProductP" ></IconCart></button>
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

