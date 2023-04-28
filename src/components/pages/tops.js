import React, { useState } from "react"
import DivContainerProducts from "../Productos/DivContainerProducts"
import ProductContainer from "../Productos/ProductsContainer"
import "../Productos/Productos.css"
import  Cart from "../Cart/Cart"
import styled from "styled-components"
import Footer from "../Footer/Footer"
import { productDataTops } from "../Productos/Tops/data";


const StyledButton = styled.button`
  width: 80px;
  background: none;
  height: 3.5rem;
  border: none;

  @media (max-width: 940px) {
    display: flex;
    margin: 0;
  }
`;

const ITEMS_PER_PAGE = window.window.innerWidth >= 1400 ? 8 : 4



const Tops = ( ) => {
  
  const [items, setItems] = useState([...productDataTops].splice(0, ITEMS_PER_PAGE ))
  const [products] = useState(productDataTops)
  const [currentPage, setCurrentPage] = useState(0);

  
  const tallas = [1,2,3,4,5] 
  
  const color = products.map(colores => colores =  colores.color)

  let colores = color.filter(function (
    elemento,
    indice,
    arreglo
  ) {
    return arreglo.indexOf(elemento) === indice;
  });

  /* Comentario para los profes, esto realmente no logré que funcione del todo bien, por la páginación. Tengo entendido se debe hacer con la parte de backend  */

  const filterTalla = (numero) => {
    let productosFiltrados = []
    for (let product of products){
      for (let tallaProducto of product.tallas){
        if (tallaProducto === numero){
          productosFiltrados.push(product)
          break
        }
      }
    }
    setItems([...productosFiltrados].splice(0, ITEMS_PER_PAGE ))
    localStorage.setItem("productsContainerTops", JSON.stringify(productosFiltrados))
    
  }
  
  const filterColor = (color) => {
    let productosFiltrados = []
    for (let product of products){
      
        if (product.color === color){
          productosFiltrados.push(product)
        
        
      }
    }
    setItems([...productosFiltrados].splice(0, ITEMS_PER_PAGE ))
    localStorage.setItem("productsContainerTops", JSON.stringify(productosFiltrados))
    
  }
  
  const nextHandler = () => {
    
    document.querySelector('.boton-next').style.cursor = "pointer"
    document.querySelector('.boton-next').style.backgroundColor = "pink"
    const totalElementos = products.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * ITEMS_PER_PAGE
    if (firstIndex >= totalElementos) {
      document.querySelector('.boton-next').style.backgroundColor = "transparent"
      document.querySelector('.boton-next').style.cursor = "auto"
      return 
    };
    setItems([...products].splice(firstIndex, ITEMS_PER_PAGE ))
    setCurrentPage(nextPage)
  }
  const prevHandler = () => {
    
    document.querySelector('.boton-next').style.backgroundColor = "pink"
    document.querySelector('.boton-next').style.cursor = "pointer"
    const prevPage = currentPage - 1
    if (prevPage < 0) return; 
    const firstIndex = prevPage * ITEMS_PER_PAGE
    setItems([...products].splice(firstIndex, ITEMS_PER_PAGE ))
    setCurrentPage(prevPage)
  }

  const [allProducts, setAllProducts] = useState(JSON.parse(localStorage.getItem("cartContainer")) || []);
  const [total, setTotal] = useState(JSON.parse(localStorage.getItem("totalContainer"))|| 0);
  const [countProducts, setCountProducts] = useState(JSON.parse(localStorage.getItem("countContainer"))|| 0);
  const count = 0
  const [quatityProducts, setQuantityProducts] = useState(0);    
	const updateLsCart = () => {
        localStorage.setItem("cartContainer", JSON.stringify(allProducts))
    }

    const [countTimes, setCountTimes] = useState(0);

    function handleClick() {
      setCountTimes(countTimes + 1);
    }  
  const [active, setActive] = useState(false);


  const closeToggle = () =>  setActive(false);
    return (

        
        
        <>
        <Cart 
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        count = {count}
        setCountProducts={setCountProducts}
        quatityProducts={quatityProducts}
        setQuantityProducts={setQuantityProducts}
        updateLsCart={updateLsCart}
        allProducts={allProducts}
        setActive={setActive}
        active={active}
        closeToggle={closeToggle}        
        handleClick={handleClick}
        setCountTimes={setCountTimes}
        
        
        > <StyledButton ></StyledButton></Cart>

        <div className="div-principal" onClick={closeToggle}>
            
            <DivContainerProducts section="Tops"  tallas={tallas} filterTalla={filterTalla} colores={colores} filterColor={filterColor}>

            <ProductContainer 
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            count = {count}
            setCountProducts={setCountProducts} 
            quatityProducts={quatityProducts}
            setQuantityProducts={setQuantityProducts}
            updateLsCart={updateLsCart}
            handleClick={handleClick}
            countTimes={countTimes}
            prevHandler={prevHandler}
            nextHandler={nextHandler}
            currentPage={currentPage + 1}
            productData={items}
            ></ProductContainer>

            </DivContainerProducts>
            <Footer></Footer>
        </div>
        
        </>
        
    )
}

export default Tops