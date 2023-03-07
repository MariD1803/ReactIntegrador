import React from "react"
import Productos from "./Productos";
import { IconCart } from "../Navbar/iconos/Iconos";
import styled from "styled-components";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const StyledDivContainerAll = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;


`
const StyledUl = styled.ul `
    margin-bottom: 1rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0;
    flex-wrap: wrap;
    padding: 1rem;
    justify-content: center;


`
const StyledLiProducts = styled.li `
    list-style: none;


`
const StyledDivPagination = styled.div `
        width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;



`
const StyledButtonPagination = styled.button `
    border-radius: 100%;
    border: grey solid 2px;
    background: pink;
    color: white;
    font-weight: 800;



`



const ProductContainer = ({allProducts,
	setAllProducts, currentPage, prevHandler, nextHandler,productData}) => {
        
          
    let countCon = localStorage.getItem('countContainer') || 0
    let totalCon = JSON.parse(localStorage.getItem('totalContainer')) || 0

    const onAddProduct = product => {
        if(product.selectedTalla === undefined) return alert("Debe elegir una talla")
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


    const productos = productData.map((item) => (
        <StyledLiProducts key={item.id+1}>
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
        </StyledLiProducts>
    ));
    return (
        
        <StyledDivContainerAll>
            <div className="TopsContainer">
            

            <StyledUl> 
                {productos}</StyledUl>

                

                

                
            </div>
            
            
            <StyledDivPagination>
                <StyledButtonPagination onClick={prevHandler}><GrFormPrevious className="button-pagination"/></StyledButtonPagination>
                <h5>Página: {currentPage}</h5>
                <StyledButtonPagination onClick={nextHandler}><GrFormNext className="button-pagination"/></StyledButtonPagination>
            </StyledDivPagination>
        </StyledDivContainerAll>
        
        
    )
}

export default ProductContainer

