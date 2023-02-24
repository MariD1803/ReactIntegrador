import React, { useState } from "react"
import styled from "styled-components";
import Cart from "../Cart/Cart";
import FormularioRegistro from "../Formulario/FormularioRegistro";
import { FcShop, FcUnlock, FcShipped } from "react-icons/fc";

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
    
    padding: 2rem 1rem 0 2rem;

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
    padding: 0 0rem 0 3rem;
  }
  @media (max-width: 480px) {
    width: 100%;
    padding: 0 0rem 0 2rem;
  }
`;
const StyledDivContainerFormulario = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 3%;

  @media (max-width: 767px) {
   flex-direction: column;
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
const StyledPleft = styled.p `
    margin-top: 0;
    margin-bottom: 1rem;
    text-align: justify;

    @media (max-width: 780px) {
      width: 86vw; 
}
    @media (max-width: 480px) {
      width: 80vw; 
}

`
const StyledDivIcon = styled.div `
    font-size: 60px;



`
const StyledDivContainerIcons= styled.div `
  display: flex;
  flex-direction: row;
  width: 98%;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;

    @media (max-width: 780px) {
    width: 92%;
    padding-top: 1rem;
    }
  

`




const StyledDivContainerTitulo = styled.div `
 display: flex;
 flex-direction: row;
    width: 100%;
    align-items: center;
    margin: 1rem 0  4rem 0;
`


const StyledDivLinea = styled.div `
  height: 1px;
  background-color: grey;
  width: 80%;
  margin: 5px;
  @media (max-width: 780px) {
    width: 70%;
    }
`


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
           <StyledDivContainerFormulario> 
            <StyledSectionLeft> 
              <StyledDivContainerTitulo>

              <StyledH2> REGISTRATE</StyledH2>
              <StyledDivLinea></StyledDivLinea>

              </StyledDivContainerTitulo>
              <StyledPleft> Puedes registrarte como un usuario del sitio, podras gestionar tus compras, consultas y datos personales completando el formulario a continuación: </StyledPleft>
              <StyledDivContainerIcons>

              <StyledDivIcon> <FcShop/></StyledDivIcon>
              <StyledDivIcon> <FcShipped/></StyledDivIcon>
              <StyledDivIcon> <FcUnlock/></StyledDivIcon>
              </StyledDivContainerIcons>
            </StyledSectionLeft >

           
            <StyledSectionRight>
                <FormularioRegistro></FormularioRegistro>
            </StyledSectionRight></StyledDivContainerFormulario>
        </div>
        
    )
}

export default Registro
