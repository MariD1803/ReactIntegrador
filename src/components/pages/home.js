import React, { useState } from "react";
import styled from "styled-components";
import CardsMove from "../Cards/CardsMove";
import CardTitulo from "../Cards/CardTitulo";
import CarouselContainer from "../Carrousel/Carousel/Carousel";
import DivPromotion from "../Carrousel/div-promotion/DivPromotion";
import PromotionContainer from "../Carrousel/div-promotion/DivPromotionContainer";
import Cart from "../Cart/Cart";
 


const StyledDivAnimated = styled.div`
  animation: opacity-html 2.2s linear;
`;
const StyledDivAnimatedCards = styled.div`
  animation: slider-html 1s linear;
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



const Home = () => {
  
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
        
      <StyledDivAnimated>
        <CarouselContainer></CarouselContainer>

        <DivPromotion>
          <PromotionContainer></PromotionContainer>
          <PromotionContainer></PromotionContainer>
          <PromotionContainer></PromotionContainer>
          <PromotionContainer></PromotionContainer>
        </DivPromotion>
      </StyledDivAnimated>

      <StyledDivAnimatedCards>
      <CardTitulo title="Nuevos Ingresos"></CardTitulo>
      </StyledDivAnimatedCards>

      <CardsMove></CardsMove>

     

      
      
    </div>
  );
};

export default Home;
