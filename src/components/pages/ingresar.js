import React, { useState } from "react"
import styled from "styled-components";
import Cart from "../Cart/Cart";
import Formulario from "../clase-04/Formulario"; 

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
            <h2> Registro</h2>
            <h2> Hola esta es mi página de registro </h2>
            <Formulario />
        </div>
        
    )
}

export default Ingresar