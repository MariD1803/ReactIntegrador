import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CardsMove from "../Cards/CardsMove";
import CardTitulo from "../Cards/CardTitulo";
import CarouselContainer from "../Carrousel/Carousel/Carousel";
import DivPromotion from "../Carrousel/div-promotion/DivPromotion";
import PromotionContainer from "../Carrousel/div-promotion/DivPromotionContainer";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
 


const StyledDivAnimated = styled.div`
  animation: opacity-html 2.2s linear;
`;
const StyledDivAnimatedCards = styled.div`
  animation: slider-html 1s linear;
`;


const StyledLink = styled(Link)`
  font-size: 45px;
    color: white !important;
    position: absolute;
    bottom: 18px;
    background-color: rgba(0,0,0,0.25);
    width: 100%;
    text-align: center;
    font-weight: 600;
    cursor: pointer;

    @media (max-width: 800px) {
      font-size: 30px;
    }
    @media (max-width: 480px) {
      font-size: 50px;
    }

`

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


const StyledDivImage= styled.div`
    height: 600px;
    width: 100%;
    margin-bottom: 2rem;
    align-items: center;
    display: flex;
    position: relative;

    @media (max-width: 1100px) {
    height: 400px;
  }
    @media (max-width: 480px) {
    height: 323px;
  }
`
const StyledDivLinksContainer= styled.div`
    height: 600px;
    width: 100%;
    margin-bottom: 2rem;
    align-items: center;
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: space-around;

    @media (max-width: 1100px) {
    height: 400px;
  }
    @media (max-width: 700px) {
    height: 330px;
  }
    @media (max-width: 480px) {
      height: 1400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`
const StyledDivLinks= styled.div`

    height: 100%;
    width: 25%;
    position: relative;
    border-radius: 16px;

    @media (max-width: 480px) {
    height: 30%;
    width: 70%;
    }

`

const StyledDivLeftImage = styled.div `
    position: absolute;
    left: 10px;
    bottom: 41px;
    font-size: 60px;
    font-style: italic;
    color: white;
    text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;

    @media (max-width: 1100px) {
      font-size: 50px;
  }
    @media (max-width: 780px) {
      font-size: 35px;
  }
    @media (max-width: 480px) {
      font-size: 20px;
    bottom: 12px;

  }

`
const StyledDivRigthImage = styled.div `
    position: absolute;
    bottom: 41px !important;
    font-size: 60px;
    font-style: italic;
    color: white;
    right: 24px;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;

    @media (max-width: 1100px) {
      font-size: 45px;
      bottom: 3%;
  }
    @media (max-width: 780px) {
      font-size: 40px;
  }
  @media (max-width: 480px) {
    bottom: 19px !important;
    right: 3px;
    font-size: 20px
  }

`


const Home = () => {
  
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


      <StyledDivImage className="imagen-home"> 
        <StyledDivLeftImage>Este año renueva tus looks</StyledDivLeftImage>
        <StyledDivRigthImage >Nueva colección</StyledDivRigthImage >
      </StyledDivImage>


      <StyledDivLinksContainer>
        <StyledDivLinks className="imagen-home-top"> <StyledLink to="/tops">TOPS</StyledLink></StyledDivLinks>
        <StyledDivLinks className="imagen-home-vestidos"><StyledLink to="/vestidos">VESTIDOS</StyledLink></StyledDivLinks>
        <StyledDivLinks className="imagen-home-bikinis"><StyledLink to="/bikinis">VERANO</StyledLink></StyledDivLinks>


      </StyledDivLinksContainer>


      <Footer></Footer>

     

      
      
    </div>
  );
};

export default Home;
