import React, { useState } from "react"
import styled from "styled-components";
import Cart from "../Cart/Cart";
import FormularioIngreso from "../Formulario/FormularioIngreso";

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

const StyledH2 = styled.h2 `
    font-size: 30px;
    font-family: 'Roboto';
    margin: 0;

    @media (max-width: 780px) {
      font-size: 24px;
    
}
`
const StyledDivLinea = styled.div `
  height: 1px;
  background-color: grey;
  width: 40%;
  margin: 5px;
  @media (max-width: 780px) {
    width: 70%;
    }
`

const StyledDivContainerTitulo = styled.div `
 display: flex;
 flex-direction: row;
    width: 50%;
    align-items: center;
    margin: 1rem 0  4rem 0;

`
const StyledDivCenter = styled.div `
    padding: 3rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
  @media (max-width: 700px) {
    
    padding: 3rem 0 0 0;
  }
`

const Ingresar = ( ) => {
    const [allProducts, setAllProducts] = useState(JSON.parse(localStorage.getItem("cartContainer"))|| []);
    const [total, setTotal] = useState(JSON.parse(localStorage.getItem("totalContainer"))|| 0);
    const [countProducts, setCountProducts] = useState(JSON.parse(localStorage.getItem("countContainer"))|| 0);
    const count = 0
    const [quatityProducts, setQuantityProducts] = useState(0);    
	const updateLsCart = () => {
        localStorage.setItem("cartContainer", JSON.stringify(allProducts))
    }

    
  const [active, setActive] = useState(false);


  const closeToggle = () =>  setActive(false);
    
 
        
    return (
        <div>

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
        
        
        > <StyledButton ></StyledButton></Cart>

            <StyledDivCenter>
              <StyledDivContainerTitulo>
                
              <StyledDivLinea></StyledDivLinea>
              <StyledH2> INGRESAR</StyledH2>
              <StyledDivLinea></StyledDivLinea>
              </StyledDivContainerTitulo>
            </StyledDivCenter>
            <FormularioIngreso/>
        </div>
        
    )
}

export default Ingresar