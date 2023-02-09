import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import CardsMove from "../Cards/CardsMove";
import CardTitulo from "../Cards/CardTitulo";
import CarouselContainer from "../Carrousel/Carousel/Carousel";
import DivPromotion from "../Carrousel/div-promotion/DivPromotion";
import PromotionContainer from "../Carrousel/div-promotion/DivPromotionContainer";
import GeneralWrapper from "../clase-05/GeneralWrapper";
import { CtxProvider } from "../clase-05/MiContexto";
import Reducer from "../clase-05/Reducer";
import SmallWrapper from "../clase-05/SmallWrapper";
import Counter from "../clase-06/components/Counter/Counter";
import { CountContextProvider } from "../clase-06/context/countContext";

const StyledDivAnimated = styled.div`
  animation: opacity-html 2.2s linear;
`;
const StyledDivAnimatedCards = styled.div`
  animation: slider-html 1s linear;
`;

const Home = () => {
  return (
    <div>
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

      <ReactPlayer
        url="https://www.youtube.com/watch?v=nSe2ekWgfdU&ab_channel=MariangelDiazVillanueva"
        width="100vw"
        height="40vh"
        position="absolute"
        top="100vh"
        left="15vw"
        hover="none"
        playing
        muted
        loop
      />

      <CountContextProvider>
        <Counter></Counter>
      </CountContextProvider>

      <CtxProvider>
        <GeneralWrapper>
          <SmallWrapper>
            <Reducer />
          </SmallWrapper>
        </GeneralWrapper>
      </CtxProvider>
    </div>
  );
};

export default Home;
