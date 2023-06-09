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
        <h2 className="h2-left">Colección - {props.section}</h2>
        <StyledUl>
          <Accordion allowToggle>

          <AccordionItem>
                <StyledButton className="buttons-left">
                  <Box as="span" flex="1" textAlign="left">
                   Talla
                  </Box>
                  <AccordionIcon />
                </StyledButton>
              <StyledAccordionPanel pb={4}>
              {
                props.tallas.map((talla) => {                
                return <StyledButtonSize onClick={()=> props.filterTalla(talla)} key={talla}  >{talla}</StyledButtonSize> || []}
                )}
              </StyledAccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <StyledButton className="buttons-left">
                  <Box as="span" flex="1" textAlign="left">
                    Color
                  </Box>
                  <AccordionIcon />
                </StyledButton>
              <StyledAccordionPanel pb={4}>
              {
                props.colores.map((color) => {                
                return <StyledButtonColor  className={`background-${color}`} onClick={()=> props.filterColor(color)} key={color}  ></StyledButtonColor> || []}
                )}
              </StyledAccordionPanel>
            </AccordionItem>

            
          </Accordion>
        </StyledUl>
      </StyledSectionLeft>
      <StyledSectionRight>
        
        {props.children}</StyledSectionRight>
    </StyledContainer>
  );
};

export default DivContainerProducts;
