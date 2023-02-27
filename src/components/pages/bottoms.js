import React, { useState } from "react"
import DivContainerProducts from "../Productos/DivContainerProducts"
import ProductContainer from "../Productos/ProductsContainer"
import "../Productos/Productos.css"
import  Cart from "../Cart/Cart"
import styled from "styled-components"
import Footer from "../Footer/Footer"
import { productDataBottoms } from "../Productos/Bottoms/data";


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

const Bottoms = ( ) => {

  const [datosFromData, setdatosFromData] = useState(productDataBottoms);
  const [items, setItems] = useState([...productDataBottoms].splice(0, ITEMS_PER_PAGE ))
  const [currentPage, setCurrentPage] = useState(0);

  
  const nextHandler = () => {
    const totalElementos = datosFromData.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * ITEMS_PER_PAGE
    if (firstIndex >= totalElementos) return;
    setItems([...datosFromData].splice(firstIndex, ITEMS_PER_PAGE ))
    setCurrentPage(nextPage)
  }
  const prevHandler = () => {
    const prevPage = currentPage - 1
    if (prevPage < 0) return; 
    const firstIndex = prevPage * ITEMS_PER_PAGE
    setItems([...datosFromData].splice(firstIndex, ITEMS_PER_PAGE ))
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
            
            <DivContainerProducts section="Bottoms">

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

export default Bottoms