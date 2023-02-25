import React, { useState } from "react"
import DivContainerProducts from "../Productos/DivContainerProducts"
import BottomsContainer from "../Productos/Bottoms/BottomsContainer"
import "../Productos/Productos.css"
import  Cart from "../Cart/Cart"
import styled from "styled-components"
import Footer from "../Footer/Footer"

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
const Bottoms = ( ) => {

  const [allProducts, setAllProducts] = useState(JSON.parse(localStorage.getItem("cartContainer"))|| []);
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
        <div className="div-principal">
            
            <DivContainerProducts section="Bottoms">

            <BottomsContainer 
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
            countTimes={countTimes}></BottomsContainer>

            </DivContainerProducts>
        </div>
        <Footer></Footer>
        </>
        
    )
}

export default Bottoms

