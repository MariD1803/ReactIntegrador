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
    margin: 0;
  }
`;

const fontStyle = {
  fontSize: "35px",
  fontWeight: "900",
};

const fontBold = {
  fontWeight: "900",
  fontSize: "18px",
};

const space = {
  height: "20px",
};

const StyledDivResponsive = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 1rem;

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
  top: 103px;
    left: 0px;
    width: 100%;
    height: 800px;
    padding: 1rem;
    border-bottom: 2px grey solid;
    z-index: 3;
`;

const StyledH2Animation = styled.h2`
  text-shadow: 3px 3px 0 var(--color-secondary), 6px 6px 0 var(--color-tertiary),
    9px 9px var(--color-quaternary), 12px 12px 0 var(--color-quinary);
  font-family: "cursiva";
  font-weight: 900;
  text-transform: uppercase;
  font-size: 40px;
  text-align: center;
  margin: 0;
  color: #f6aca2;
  animation: shadows 1.2s ease-in infinite, move 1.2s ease-in infinite;
  letter-spacing: 0.4rem;
`;

const StyledDivMenu = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 260px;
  font-size: 25px;
`;

const StyledUlHover = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 0.5rem;
`;


const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 50px;
  color: white;
  align-items: center;
  width: 100px;
  height: 100%;

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

const StyledLink = styled.a`
  list-style: none;
  cursor: pointer;
  color: black;
  text-decoration: none;
  &:hover {
    color: black;
  }
`;
const StyledLi = styled.li`
  list-style: none;
  transition: 0s;
  &:hover {
    transform: translate(20px);
    transition: 1s;
    text-decoration: underline;
  }
`;

const StyledMenu = (props) => {
  const [displayed, setDisplayed] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const handleClick = () => {
    setIsToggle((prevState) => (prevState ? false : true));
  };
  

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
                    <StyledLi style={fontBold} className="font-size-up">TOPS</StyledLi>
                    <StyledUlHover>
                      <StyledLi>Remeras</StyledLi>
                      <StyledLi>Bodys</StyledLi>
                    </StyledUlHover>
                    <div style={space}> </div>
                  </StyledLink>
                  <StyledLink>
                    <StyledLi style={fontBold} className="font-size-up">VESTIDOS</StyledLi>
                  </StyledLink>
                  <div style={space}></div>
                  <StyledLink>
                    <StyledLi style={fontBold} className="font-size-up"> BOTTOMS </StyledLi>
                    <StyledUlHover>
                      <StyledLi>Shorts</StyledLi>
                      <StyledLi>Pantalones</StyledLi>
                    </StyledUlHover>
                  </StyledLink>
                  <div style={space}></div>
                  <StyledLink>
                    <StyledLi style={fontBold} className="font-size-up">BIKINIS </StyledLi>
                  </StyledLink>
                  <div style={space}> </div>
                  <StyledLink>
                    <StyledLi style={fontBold} className="font-size-up"> ACCESORIOS </StyledLi>
                    <StyledUlHover>
                      <StyledLi>Sombreros</StyledLi>
                      <StyledLi>Pareos</StyledLi>
                    </StyledUlHover>
                  </StyledLink>
                </StyledDivMenu>
                <div className="position-relative">
                  <div  className="imagen-navbar"  alt="IMAGEN" />
                  <div className="position-absolute">
                    <StyledH2Animation>SALE</StyledH2Animation>
                    <StyledH2Animation>SALE</StyledH2Animation>
                    <StyledH2Animation>SALE</StyledH2Animation>
                  </div>
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
              <StyledLink className={props.className}>2X1</StyledLink>
            </StyledUl>
          </StyledDivContainer>

          <StyledDivContainer>
            <StyledUl>
              <StyledLink className={props.className}>LOCALES</StyledLink>
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
                        <StyledLi style={fontBold}>TOPS</StyledLi>
                        <StyledUlHover>
                          <StyledLi>Remeras</StyledLi>
                          <StyledLi>Bodys</StyledLi>
                        </StyledUlHover>
                        <div style={space}> </div>
                      </StyledLink>
                      <StyledLink>
                        <StyledLi style={fontBold}>VESTIDOS</StyledLi>
                      </StyledLink>
                      <div style={space}></div>
                      <StyledLink>
                        <StyledLi style={fontBold}> BOTTOMS </StyledLi>
                        <StyledUlHover>
                          <StyledLi>Shorts</StyledLi>
                          <StyledLi>Pantalones</StyledLi>
                        </StyledUlHover>
                      </StyledLink>
                      <div style={space}></div>
                      <StyledLink>
                        <StyledLi style={fontBold}>VIKINIS </StyledLi>
                      </StyledLink>
                      <div style={space}> </div>
                      <StyledLink>
                        <StyledLi style={fontBold}> ACCESORIOS </StyledLi>
                        <StyledUlHover>
                          <StyledLi>Sombreros</StyledLi>
                          <StyledLi>Pareos</StyledLi>
                          
                      <div style={space}> </div>
                        </StyledUlHover>
                        <StyledLink>
                        <StyledLi style={fontBold}>VER TODO </StyledLi>
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
                      <Box as="span" flex="1" textAlign="left">
                        2X1
                      </Box>
                    </AccordionButtonStyled>
                    <AccordionPanel pb={4}>                      
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionButtonStyled>
                      <Box as="span" flex="1" textAlign="left">
                        LOCALES
                      </Box>
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
