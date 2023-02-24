import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import "../../../App.css"
import "../../../animations.css"
import { Link } from "react-router-dom";

const AccordionButtonStyled = styled(AccordionButton)`
  background: none;
  margin: 0;
  border: none;
  font-size: 20px;
  align-items: flex-start;
  font-family: "cursiva";
  cursor: pointer;

  &:hover {
    text-shadow: 1px 1px 2px var(--pink), 0 0 1em var(--pink), 0 0 0.2em var(--pink);
  }
`;

const AccordionStyled = styled(Accordion)`
display: flex;
  background: none;
  justify-content: center;
  gap: 80px;
  flex-direction: column;
  padding-bottom: 3rem;
`;

const StyledButton = styled.button`
  margin: 5px auto;
  padding: 7px 10px;
  border: none;
  border-radius: 3px;
  background: none;
  font-size: 15px;
  color: white;
  display: flex;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: none;

  &:focus {
    transition-duration: 2s;
    transform: rotate(0.501turn);
  }

  @media (max-width: 767px) {
    display: flex;
    margin: 0 0 0 1rem;
  }
`;

const fontStyle = {
  fontSize: "35px",
  fontWeight: "900",
};

const fontBold = {
  fontWeight: "900",
  fontSize: "30px !important",
};

const space = {
  height: "20px",
};

const StyledDivResponsive = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 1rem 0 0 1rem;
  gap: 10px;

  @media (max-width: 767px) {
    display: none;
  }
`;
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  -ms-flex-direction: column;
  position: absolute;
  left: 0%;
  width: 100%;
  flex-direction: column;
`;

const StyledDivContainer = styled.div`
  padding-left: 1rem;
  width: 100%;
  transition: 3s;
  &:hover {
    transform: translate(0.1%);
    transition: 2s;
    text-transform: uppercase;
    background-image: linear-gradient(
      -225deg,
      var(--blue) 0%,
      #ff1361 29%,
      #eb3983 67%,
      #fdb7c5 100%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    display: inline-block;
  }
`;

const StyledDivHover = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  position: absolute;
  background-color: white;
  top: 140px;
  left: 0px;
  width: 100%;
  height: 800px;
  padding: 1rem;
  z-index: 3;
  animation: slider-menu 0.7s linear;

  @media (max-width: 2700px) {
    top: 103px;    
    border-bottom: 2px grey solid;
  }
`;


const StyledDivMenu = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
    width: 260px;
    height: 60%;
    justify-content: space-around;
`;



const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 50px;
  color: white;
  align-items: center;
  width: 170px;
  height: 100%;
  padding: 0;

  @media (max-width: 1100px) {
    width: 80px;
  }

  @media (max-width: 767px) {
    left: 0;
    position: absolute;
    padding: 2rem;
    width: 42%;
    height: 100vh;
    top: 3px;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
    z-index: 1001;
    overflow-y: scroll;
    -webkit-scrollbar: 10px;
}

  
  @media (max-width: 480px) {
    width: 100%;
    padding: 0;
    padding-top: 7rem;
  }
`;

const StyledUlActive = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  cursor: pointer;
  height: 100%;

  @media (max-width: 767px) {
    gap: 20px;
    width: 100%;
    height: 30%;
  }

`;

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
  &:hover {
    transform: translate(20px);
    transition: 1s;
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    margin: 0 0 1rem 0;
  }
`;

const StyledMenu = (props) => {
  const [displayed, setDisplayed] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const handleClick = () => {
    setIsToggle((prevState) => (prevState ? false : true));
  };
  
  const closeToggle = () =>  setIsToggle(false);

  return (
    <>
      
      <div>
        {/*  Aca comienza el menú antes de volverse menú hamburguesa */}
        <StyledDivResponsive>
          <StyledUlActive
            onMouseEnter={() => setDisplayed(true)}
            onMouseLeave={() => setDisplayed(false)}
          >
            <StyledDivContainer className={props.className}>
              COLECCION
            </StyledDivContainer>

            {displayed && (
              <StyledDivHover>
                <StyledDivMenu>
                  <StyledLink>
                    <Link to="/tops" style={fontBold} > <StyledLi
                     className="font-size-up">TOPS</StyledLi></Link>
                    
                    <div style={space}> </div>
                  </StyledLink>
                  <StyledLink>
                  <Link to="/vestidos" style={fontBold}> <StyledLi style={fontBold} className="font-size-up">VESTIDOS</StyledLi></Link>  
                  </StyledLink>
                  <div style={space}></div>
                  <StyledLink>
                  <Link to="/bottoms" style={fontBold}><StyledLi style={fontBold} className="font-size-up"> BOTTOMS </StyledLi></Link>
                    
                  </StyledLink>
                  <div style={space}></div>
                  <StyledLink>
                  <Link to="/bikinis" style={fontBold}> <StyledLi style={fontBold} className="font-size-up">BIKINIS </StyledLi></Link>
                  </StyledLink>
                  <div style={space}> </div>
                  <StyledLink>
                  <Link to="/accesorios" style={fontBold}> <StyledLi style={fontBold} className="font-size-up"> ACCESORIOS </StyledLi></Link> 
                    
                  </StyledLink>
                </StyledDivMenu>
                <div className="position-relative">
                  <div  className="imagen-navbar"  alt="IMAGEN" />
                </div>
              </StyledDivHover>
            )}
          </StyledUlActive>

          <StyledDivContainer>
            <StyledUl>
            <StyledLink className={props.className}>SALE</StyledLink>
            </StyledUl>
          </StyledDivContainer>

          <StyledDivContainer>
            <StyledUl>
            <Link to="/about"> <StyledLink className={props.className}>NOSOTROS</StyledLink></Link>
             
            </StyledUl>
          </StyledDivContainer>

          <StyledDivContainer>
            <StyledUl>
            <Link to="/contacto"> <StyledLink className={props.className}>CONTACTO</StyledLink></Link>
            </StyledUl>
          </StyledDivContainer>
        </StyledDivResponsive>

        {/* Aca se vuelve el menú hamburguesa   */}
        <StyledButton onClick={handleClick}>
          <AiOutlineMenu style={fontStyle} />
        </StyledButton>
        {isToggle && (
          <StyledDiv>
            <StyledUl>
              <StyledUlActive>
                <AccordionStyled allowMultiple>
                  <AccordionItem>
                    <AccordionButtonStyled>
                      <Box as="span" flex="1" textAlign="left">
                        COLECCION
                      </Box>
                      <AccordionIcon />
                    </AccordionButtonStyled>
                    <AccordionPanel pb={4} pl={10}>
                      <div style={space}> </div>
                      <StyledLink>
                      <Link to="/tops" style={fontBold}> <StyledLi style={fontBold} onClick={closeToggle}>TOPS</StyledLi></Link>
                        
                        <div style={space}> </div>
                      </StyledLink>
                      <StyledLink>
                      <Link to="/vestidos" style={fontBold}> <StyledLi style={fontBold} onClick={closeToggle}>VESTIDOS</StyledLi></Link>
                      </StyledLink>
                      <div style={space}></div>
                      <StyledLink>
                      <Link to="/bottoms" style={fontBold}><StyledLi style={fontBold} onClick={closeToggle}> BOTTOMS </StyledLi></Link>
                        
                      </StyledLink>
                      <div style={space}></div>
                      <StyledLink>
                      <Link to="/bikinis" style={fontBold}><StyledLi style={fontBold} onClick={closeToggle}>BIKINIS </StyledLi></Link>
                      </StyledLink>
                      <div style={space}> </div>
                      <StyledLink>
                      <Link to="/accesorios" style={fontBold}><StyledLi style={fontBold} onClick={closeToggle}> ACCESORIOS </StyledLi></Link>
                        
                        <StyledLink>
                      </StyledLink>
                        <div style={space}></div>
                      </StyledLink>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionButtonStyled>
                      <Box as="span" flex="1" textAlign="left">
                        SALE
                      </Box>
                    </AccordionButtonStyled>
                    <AccordionPanel pb={4}>                      
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButtonStyled>
                      <Link to="/about" onClick={closeToggle}>  <Box as="span" flex="1" textAlign="left">
                        NOSOTROS
                      </Box></Link>
                     
                    </AccordionButtonStyled>
                    <AccordionPanel pb={4}>                      
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionButtonStyled> <Link to="/contacto" onClick={closeToggle}>
                    <Box as="span" flex="1" textAlign="left">
                        CONTACTO
                      </Box>
                    </Link>
                      
                    </AccordionButtonStyled>
                    <AccordionPanel pb={4}>                      
                    </AccordionPanel>
                  </AccordionItem>

                </AccordionStyled>
              </StyledUlActive>

            </StyledUl>
          </StyledDiv>
        )}
      </div>
    </>
  );
};

export default StyledMenu;
