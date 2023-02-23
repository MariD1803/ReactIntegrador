import React, { useState } from "react"
import styled from "styled-components";
import Cart from "../Cart/Cart";
import FormularioRegistro from "../Formulario/FormularioRegistro";

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

const StyledSectionLeft = styled.section`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 3rem 0 0 5rem;
  align-items: flex-start;

  @media (max-width: 767px) {
    
  padding: 2rem 0 0 3rem;
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
  }
  @media (max-width: 480px) {
    display: flex;
  flex-direction: column;
  align-items: flex-start;
  }
`;

const StyledSectionRight = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    padding: 3rem 0 0 0;

  @media (max-width: 767px) {
    width: 100%;
  }
`;
const StyledDivContainerFormulario = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 767px) {
   flex-direction: column;
  }
`;



const Registro = ( ) => {
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
           <StyledDivContainerFormulario> <StyledSectionLeft><h2> Registrate</h2>
            <p> Puedes registrarte como un usuario del sitio, podras gestionar tus compras, consultas y datos personales completando el formulario a continuación: </p>
            </StyledSectionLeft >
            <StyledSectionRight>
                <FormularioRegistro></FormularioRegistro>
            </StyledSectionRight></StyledDivContainerFormulario>
        </div>
        
    )
}

export default Registro
