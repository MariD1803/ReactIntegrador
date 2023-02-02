import "./App.css";
import React from "react";
import ReactPlayer from "react-player";
import Formulario from "./components/clase-04/Formulario";
import GeneralWrapper from "./components/clase-05/GeneralWrapper";
import { CtxProvider } from "./components/clase-05/MiContexto";
import Reducer from "./components/clase-05/Reducer";
import SmallWrapper from "./components/clase-05/SmallWrapper";
import Counter from "./components/clase-06/components/Counter/Counter";
import { CountContextProvider } from "./components/clase-06/context/countContext";
import Navbar from "./components/Navbar/divnavbar/Navbar";
import StyledMenu from "./components/Navbar/menu/Menu";
import Logo from "./components/Navbar/logo/Logo";
import {
  IconCart,
  IconFacebook,
  IconInstagram,
  IconLogin,
} from "../src/components/Navbar/iconos/Iconos";
import Div from "../src/components/Navbar/divnavbar/DivSecond";
import "./App.css";
import DivPromotion from "./components/Carrousel/div-promotion/DivPromotion";
import PromotionContainer from "./components/Carrousel/div-promotion/DivPromotionContainer";
import CardsMove from "./components/Cards/CardsMove";
import CarouselContainer from "./components/Carrousel/Carousel/Carousel";
import CardTitulo from "./components/Cards/CardTitulo";

function App() {
  return (
    <>
      <Navbar className="color-blue">
        ¡Siguenos!
        <Div>
          <IconFacebook className="font-style-up" />
          <IconInstagram className="font-style-up" />
        </Div>
      </Navbar>
      <Navbar className="gradient-color">
        <StyledMenu className="fontStyleTitle"></StyledMenu>
        <Logo />
        <Div>
          <IconLogin className="font-style2"></IconLogin>
          <IconCart className="font-style2" />
        </Div>
      </Navbar>

      <CarouselContainer></CarouselContainer>


      <DivPromotion>
        <PromotionContainer></PromotionContainer>
        <PromotionContainer></PromotionContainer>
        <PromotionContainer></PromotionContainer>
        <PromotionContainer></PromotionContainer>
      </DivPromotion>


       <CardTitulo title="Nuevos Ingresos"></CardTitulo>   
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

      <Formulario />
    </>
  );
}
export default App;
