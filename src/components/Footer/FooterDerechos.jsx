import React from 'react'
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import styled from 'styled-components';

const StyledFooterContainerItems = styled.div  `
   
    align-items: center;
    height: 70px;
    display: flex;
    flex-direction: row;
    background-color: var(--pink);
    justify-content: space-around;


`
const StyledPIcons = styled.p  `
  font-size: 20px;
  margin: 0;

`
const StyledDivFooterRigth = styled.div  `
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`
const StyledDivFooterInside = styled.div  `    
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 40%;
    font-size: 42px;

`
const FooterDerechos = () => {
  return (
    <div><StyledFooterContainerItems>

    <StyledPIcons>© 2023 ¡HEY!STORE&CO - Todos Los Derechos Reservados</StyledPIcons>
    <StyledDivFooterRigth><StyledPIcons>Developed whit</StyledPIcons><StyledDivFooterInside><FaReact/><TbBrandJavascript/></StyledDivFooterInside> </StyledDivFooterRigth>


  </StyledFooterContainerItems></div>
  )
}

export default FooterDerechos