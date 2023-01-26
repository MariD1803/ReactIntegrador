import "./App.css";
import React from "react";
import ReactPlayer from "react-player";
import Video from "./video.webm";
import Formulario from "./components/clase-04/Formulario";
import GeneralWrapper from "./components/clase-05/GeneralWrapper";
import { CtxProvider } from "./components/clase-05/MiContexto";
import Reducer from "./components/clase-05/Reducer";
import SmallWrapper from "./components/clase-05/SmallWrapper";
import Counter from "./components/clase-06/components/Counter/Counter";
import { CountContextProvider } from "./components/clase-06/context/countContext";
import Navbar from "./Navbar/divnavbar/Navbar";
import StyledMenu from "./Navbar/menu/Menu";
import Logo from "./Navbar/logo/Logo";
import {
  IconCart,
  IconFacebook,
  IconInstagram,
  IconLogin,
} from "./Navbar/iconos/Iconos";
import Div from "./Navbar/divnavbar/DivSecond";
import "./App.css";
import Carrousel from "./components/Carrousel/divcarrousel/Carrousel";
import CarrouselContainer from "./components/Carrousel/divcarrousel/CarrouselContainer";
import {
  FirstImg,
  FourthImg,
  SecondImg,
  ThirdImg,
} from "./components/Carrousel/img-carrousel/ImgCarrousel";
import DivPromotion from "./components/Carrousel/div-promotion/DivPromotion";
import PromotionContainer from "./components/Carrousel/div-promotion/DivPromotionContainer";



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
      <Carrousel>
        <CarrouselContainer>
          <FirstImg />
        </CarrouselContainer>
        <CarrouselContainer>
          <SecondImg />
        </CarrouselContainer>

        <CarrouselContainer>
          <ThirdImg />
        </CarrouselContainer>

        <CarrouselContainer>
          <FourthImg />
        </CarrouselContainer>
      </Carrousel>

      <DivPromotion>
        <PromotionContainer></PromotionContainer>
        <PromotionContainer></PromotionContainer>
        <PromotionContainer></PromotionContainer>
        <PromotionContainer></PromotionContainer>
      </DivPromotion>

      <ReactPlayer width="100%" url={Video} playing loop />

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
