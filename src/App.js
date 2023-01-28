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
import DivPromotion from "./components/Carrousel/div-promotion/DivPromotion";
import PromotionContainer from "./components/Carrousel/div-promotion/DivPromotionContainer";
import CardsContainer from "./components/Cards/CardsContainer";
import Card from "./components/Cards/Card";
import CardsMove from "./components/Cards/CardsMove";
import { Img } from "./components/Imagenes/Img";
import { IMAGES } from "./components/Imagenes/UrlImages.js";
import CarouselContainer from "./components/Carrousel/Carousel/Carousel";

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
      {/* <Carrousel>
        <CarrouselContainer>
          <Img src={IMAGES.HEROONE}></Img>
        </CarrouselContainer>
        <CarrouselContainer>
          <Img src={IMAGES.HEROTWO}></Img>
        </CarrouselContainer>

        <CarrouselContainer>
          <Img src={IMAGES.HEROTHREE}></Img>
        </CarrouselContainer>

        <CarrouselContainer>
          <Img src={IMAGES.HEROFOUR}></Img>
        </CarrouselContainer>
      </Carrousel>
 */}
      <DivPromotion>
        <PromotionContainer></PromotionContainer>
        <PromotionContainer></PromotionContainer>
        <PromotionContainer></PromotionContainer>
        <PromotionContainer></PromotionContainer>
      </DivPromotion>

      <Card className="card-1" >
        <h2>NUEVOS INGRESOS</h2>
        <CardsContainer>

          <CardsMove>
          <Card>
            <Img src={IMAGES.BIKINIBLACK}></Img>
            <h2>Primera</h2>
          </Card>

          <Card>
            <Img src={IMAGES.ENTEROMALLA}></Img>
            <h2>Segunda</h2>
          </Card>

          <Card>
            <Img src={IMAGES.ENTEROFLOWERS}></Img>
            <h2>Tercera</h2>
          </Card>

          </CardsMove>
          

        </CardsContainer>
        <h2>Ver Más</h2>
      </Card>

      <ReactPlayer
        url="https://www.youtube.com/watch?v=nSe2ekWgfdU&ab_channel=MariangelDiazVillanueva"
        width="40vw"
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
