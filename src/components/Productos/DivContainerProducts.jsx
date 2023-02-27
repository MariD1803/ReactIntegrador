import React from "react";
import styled from "styled-components";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

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

  @media (max-width: 767px) {
    width: 100%;
  }
`;
const StyledSectionRight = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const StyledUl = styled.ul `
    width: 100%;
    padding: 3rem;
    margin: 0;

    @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`

const StyledButton = styled(AccordionButton) `
    cursor: pointer;
    width: 100%;
    background: none;
    font-size: 30px;
    font-family: 'Roboto'; 
    justify-content: space-between;
    padding: 1rem;
    border: none;
    border-top: grey solid 1px !important;
    border-bottom: grey solid 1px !important;

    @media (max-width: 480px) {
      font-size: 20px;
    }
`

const StyledButtonColor = styled.button `
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    margin-bottom: 1rem;
    border: grey solid 1px;
    cursor: pointer;

    @media (max-width: 480px) {
      width: 1rem;
      height: 1rem;
      margin-bottom: 0.5rem;
    }

`
const StyledButtonSize = styled.button `
    width: 2rem;
    height: 2rem;
    border: #b6b6b6b9 solid 1px;

    &:focus{
        background-color: var(--pink);
        color: white;
    }

    @media (max-width: 480px) {
      width: 1.5rem;
    height: 1.5rem;
    }

`
const StyledAccordionPanel = styled(AccordionPanel)`
    display: flex;
    flex-direction: row;     
    gap: 33px;
    flex-wrap: wrap;
    margin: 1rem 0;
    padding: 1rem 0 1rem 1rem;
`



const DivContainerProducts = (props) => {
  return (
    <StyledContainer>
      <StyledSectionLeft>
        <h2 className="h2">Colección - {props.section}</h2>
        <StyledUl>
          <Accordion allowToggle>

          <AccordionItem>
                <StyledButton>
                  <Box as="span" flex="1" textAlign="left">
                   Talla
                  </Box>
                  <AccordionIcon />
                </StyledButton>
              <StyledAccordionPanel pb={4}>
               <StyledButtonSize>{props.talla1}</StyledButtonSize>
               <StyledButtonSize>{props.talla2}</StyledButtonSize>
               <StyledButtonSize>{props.talla3}</StyledButtonSize>
               <StyledButtonSize>{props.talla4}</StyledButtonSize>
               <StyledButtonSize>{props.talla5}</StyledButtonSize>
              </StyledAccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <StyledButton>
                  <Box as="span" flex="1" textAlign="left">
                    Color
                  </Box>
                  <AccordionIcon />
                </StyledButton>
              <StyledAccordionPanel pb={4}>
              <StyledButtonColor  className={"background-black"} >  </StyledButtonColor>
              <StyledButtonColor  className={"background-red"}>  </StyledButtonColor>
              <StyledButtonColor  className={"background-white"}>  </StyledButtonColor>
              <StyledButtonColor  className={"background-jean"}>  </StyledButtonColor>
              <StyledButtonColor  className={"background-nute"}>  </StyledButtonColor>
              <StyledButtonColor  className={"background-green"}>  </StyledButtonColor>
              <StyledButtonColor  className={"background-grey"}>  </StyledButtonColor>
              <StyledButtonColor  className={"background-red-wine"}>  </StyledButtonColor>
              <StyledButtonColor  className={"background-pink"}>  </StyledButtonColor>
              <StyledButtonColor  className={"background-yellow"}>  </StyledButtonColor>
              <StyledButtonColor  className={"background-brown"}>  </StyledButtonColor>
              <StyledButtonColor  className={"background-blue"}>  </StyledButtonColor>
              <StyledButtonColor  className={"background-orange"}>  </StyledButtonColor>
              <StyledButtonColor  className={"background-fucsia"}>  </StyledButtonColor>
              <StyledButtonColor  className={"background-blue-sky"}>  </StyledButtonColor>
              <StyledButtonColor  className={"background-blue-dark"}>  </StyledButtonColor>
              </StyledAccordionPanel>
            </AccordionItem>

            
          </Accordion>
        </StyledUl>
      </StyledSectionLeft>
      <StyledSectionRight>{props.children}</StyledSectionRight>
    </StyledContainer>
  );
};

export default DivContainerProducts;
