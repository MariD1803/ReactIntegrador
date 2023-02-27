import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/divnavbar/Navbar";
import React, { useState } from "react";
import {  IconCart, IconFacebook, IconInstagram, IconLogin } from "../Navbar/iconos/Iconos";
import StyledMenu from "../Navbar/menu/Menu";
import Div from "../Navbar/divnavbar/DivSecond";
import Logo from "../Navbar/logo/Logo";
import Home from "../pages/home.js";
import Registro from "../pages/registro";
import Tops from "../pages/tops";
import Bottoms from "../pages/bottoms";
import Bikinis from "../pages/bikinis";
import Accesorios from "../pages/accesorios";
import Vestidos from "../pages/vestidos";
import styled from "styled-components";
import About from "../pages/about";
import Contacto from "../pages/contacto";
import Ingresar from "../pages/ingresar";
import FooterDerechos from "../Footer/FooterDerechos";
import Calzado from "../pages/calzado";

const StyledP = styled.p `
  font-size: 30px;
  margin: 0;
  padding: 0;

  @media (max-width: 2000px ) {
      font-size: 20px;
  }
`
const StyledButton = styled.button `
  border: none;
  background: none;
  height: max-content;
  width: max-content;

`

const StyledDiv= styled.div `
  background-color: white;
  position: absolute;
  z-index: 999;
  top: 0;
  right: 0;
  width: 600px;
  height: 260px;
  box-shadow: 0 10px 20px rgb(0 0 0 / 20%);
  border-radius: 10px;

  @media (max-width: 1100px) {
    width: 500px;
  }
  @media (max-width: 480px) {
    width: 360px;
    height: 200px;
  }
  @media (max-width: 320px) {
    width: 320px;
  }
`

const StyledDivLinea = styled.div `
  height: 1px;
  background-color: grey;
  width: 100%;
  margin: 5px;
`

const StyledLink = styled.div`
  list-style: none;
  cursor: pointer;
  color: black;
  text-decoration: none;
  &:hover {
    color: black;
  }
`;

const StyledLi = styled.li`
width: 100%;
  list-style: none;
  color: black;
  transition: 0s;
  text-align: initial;
  font-size: 22px !important;
  font-weight: 900;
  &:hover {
    transform: translate(20px);
    transition: 1s;
    text-decoration: underline;
  }

  @media (max-width: 1100px) {
    font-size: 18px !important;
  }
  @media (max-width: 480px) {
    font-size: 16px !important;
  }
`;

const StyledDivContainer = styled.div `
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;

`

const Rutas = () => {

  const [isToggleLogin, setIsToggleLogin] = useState(false)
  const handleClickLogin = () => {
    setIsToggleLogin((prevState) => (prevState ? false : true));
  };
  
  const closeToggleLogin = () =>  setIsToggleLogin(false);

  
  


  return (
    <div>
      <Router>
        <Navbar className="color-blue">
          <StyledP>¡Siguenos!</StyledP>
          <Div>
            <StyledButton  onClick={()=>{handleClickLogin()}}>
              <IconFacebook
                className="font-style-up"
                url="https://www.facebook.com/"
              ></IconFacebook>
            </StyledButton>
            <StyledButton  onClick={()=>{handleClickLogin()}}>
              <IconInstagram
                className="font-style-up"
                url="https://www.instagram.com/"
              />
            </StyledButton>  
            
          </Div>
        </Navbar>
        <Navbar className="gradient-color">
          <StyledButton  onClick={closeToggleLogin}> 
            <StyledMenu className="fontStyleTitle" as="span"></StyledMenu>
          </StyledButton>
          <StyledButton  onClick={()=>{closeToggleLogin()}}>
            <Logo />
          </StyledButton>
          <Div>
          <StyledButton  onClick={()=>{handleClickLogin()}}>
            <IconLogin  
              className="font-style2"
            ></IconLogin>            
          </StyledButton>
            {isToggleLogin && 
              <div className="position-aboslute-top">
                <div>
                  <StyledDiv>
                      <StyledDivContainer>

                      <Link to="/registro"> 
                        <StyledButton onClick={()=>{closeToggleLogin()}}>
                        <StyledLink>
                          <StyledLi > REGISTRATE </StyledLi>
                        
                        </StyledLink>
                        </StyledButton>
                      </Link>
                      <StyledDivLinea></StyledDivLinea>
                      <Link to="/ingresar"> 
                        <StyledButton onClick={()=>{closeToggleLogin()}}>
                        <StyledLink>
                          <StyledLi  > INGRESAR </StyledLi>
                        
                        </StyledLink>
                        </StyledButton>
                      </Link>
                      </StyledDivContainer>
                     
                     


                  </StyledDiv>


                </div>


              </div>
            }
            <StyledButton  onClick={closeToggleLogin}> 

            <IconCart className="font-style2"  />
            
             </StyledButton>
             
            
             
          </Div>
        </Navbar>
        <Routes>
            <Route  path='/' element={<Home />} />            
            <Route  path='registro' element={<Registro />}></Route>
            <Route  path='ingresar' element={<Ingresar />}></Route>
            <Route  path='tops' element={<Tops />}></Route>
            <Route  path='calzado' element={<Calzado />}></Route>
            <Route  path='bottoms' element={<Bottoms />}></Route>
            <Route  path='accesorios' element={<Accesorios />}></Route>
            <Route  path='bikinis' element={<Bikinis />}></Route>
            <Route  path='vestidos' element={<Vestidos />}></Route>
            <Route  path='about' element={<About />}></Route>
            <Route  path='contacto' element={<Contacto />}></Route>
        </Routes>
      </Router>
      <FooterDerechos></FooterDerechos>
    </div>
  );
};

export default Rutas;
