import styled from "styled-components";
import React, { useState } from "react";
import Nosotros from "../About/Nosotros/Nosotros";
import Cart from "../Cart/Cart";
import PreguntasFrecuentes from "../About/PreguntasFrecuentes/PreguntasFrecuentes";
import TerminosYCondiciones from "../About/Terminos/TerminosYCondiciones";
import CambiosODevoluciones from "../About/Cambios/CambiosODevoluciones";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 1200px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledSectionLeft = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;

  @media (max-width: 780px) {
    width: 100%;
  }
`;


const StyledUl = styled.ul`
  width: 100%;
  height: 100%;
  padding: 3rem 0 3rem 1rem;
  margin: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    padding: 3rem 1rem 3rem 0rem;
  }
`;

const StyledButtonOptions = styled.button`
  background: none;
  list-style: none;
  border-top: grey solid 1px;
  border-bottom: grey solid 1px;
  border-left: none;
  border-right: none;
  font-size: 20px ;
  font-family: 'Roboto';
  &:focus {
    background-color: var(--pink);
  }
`;
const StyledDivAbsolute = styled.button`
  position: absolute;
  top: 147px;
  right: 0;
  width: 70%;  
  height: 100%;
  border: none;
  background: white;

  @media (max-width: 2700px) {
  top: 104px;
  }
  @media (max-width: 780px) {
    top: 35%;
    width: 100vw;
    height: 170%;
  }
  @media (max-width: 480px) {
  top: 46%;
  width: 100vw;
  }

 
`;

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
const StyledDivHeight = styled.button`
    height: 1200px;
`;


const About = () => {

  
  const [isToggleNosotros, setIsToggleNosotros] = useState(true);
  const [isToggleBeneficios, setIsToggleBeneficios] = useState(false);
  const [isToggleTerminos, setIsToggleTerminos] = useState(false);
  const [isToggleCambios, setIsToggleCambios] = useState(false);
  const handleClickNosotros = () => {
    setIsToggleNosotros((prevState) => (prevState ? true : false));
  };
  const handleClickBeneficios = () => {
    setIsToggleBeneficios((prevState) => (prevState ? false : true));
  };
  const handleClickTerminos = () => {
    setIsToggleTerminos((prevState) => (prevState ? false : true));

  };
  const handleClickCambios = () => {
    setIsToggleCambios((prevState) => (prevState ? false : true));

  };

  const closeToggleBenficios = () =>  setIsToggleBeneficios(false);
  const closeToggleTerminos = () =>  setIsToggleTerminos(false);
  const closeToggleCambios = () =>  setIsToggleCambios(false);

  
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
        handleClick={handleClick}
        setCountTimes={setCountTimes}
        
        
        > 
        <StyledButton ></StyledButton>
        </Cart>
      <StyledContainer>
        <StyledSectionLeft>
          <StyledUl>
            <StyledButtonOptions onClick={()=>{handleClickNosotros(); closeToggleBenficios(); closeToggleCambios(); closeToggleTerminos()}}>
              <li>Nosotros</li>
            </StyledButtonOptions>
            {isToggleNosotros && <StyledDivAbsolute><Nosotros></Nosotros></StyledDivAbsolute>}

            <StyledButtonOptions onClick={()=>{handleClickBeneficios(); closeToggleCambios(); closeToggleTerminos()}}>
              <li>Preguntas Frecuentes</li>
            </StyledButtonOptions>
            {isToggleBeneficios && <StyledDivAbsolute><PreguntasFrecuentes/></StyledDivAbsolute>}

            <StyledButtonOptions onClick={()=>{handleClickTerminos(); closeToggleBenficios(); closeToggleCambios()}}>
              <li>Terminos y condiciones</li>
            </StyledButtonOptions>
            {isToggleTerminos && <StyledDivAbsolute><TerminosYCondiciones/></StyledDivAbsolute>}

            <StyledButtonOptions onClick={()=>{handleClickCambios(); closeToggleBenficios(); closeToggleTerminos()}}>
              <li>Cambios o Devoluciones</li>
            </StyledButtonOptions>
            {isToggleCambios && <StyledDivAbsolute><CambiosODevoluciones></CambiosODevoluciones></StyledDivAbsolute>}
            
          </StyledUl>
        </StyledSectionLeft>
      </StyledContainer>

      
    </div>
  );
};

export default About;
