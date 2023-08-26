import React from 'react'
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import styled from 'styled-components';

const StyledFooterContainerItems = styled.div  `
   
    align-items: center;
    height: 70px;
    display: flex;
    flex-direction: row;
    /* background-color: var(--pink); */
background: linear-gradient(135deg, #f7b9c655 25%, transparent 25%) -22px 0/ 44px 44px, linear-gradient(225deg, #f7b9c6 25%, transparent 25%) -22px 0/ 44px 44px, linear-gradient(315deg, #f7b9c655 25%, transparent 25%) 0px 0/ 44px 44px, linear-gradient(45deg, #f7b9c6 25%, #f397a9 25%) 0px 0/ 44px 44px;
    justify-content: space-around;
    position: absolute;
    width: 102%;
    color: white !important;
    font-weight: 600;
   
    @media (max-width: 500px) {
    flex-direction: column;
  }
    @media (max-width: 425px) {
    width: 105%;
  }


`
const StyledPIcons = styled.p  `
  font-size: 20px;
  margin: 0;

  @media (max-width: 800px) {
    font-size: 13px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }

`
const StyledDivFooterRigth = styled.div  `
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 500px) {
      
    width: 100%;
    }
`
const StyledDivFooterInside = styled.div  `    
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 40%;
    font-size: 42px;

    @media (max-width: 500px) {
    font-size: 20px;
  }

`
const FooterDerechos = () => {
  return (
    <div><StyledFooterContainerItems>

    <StyledPIcons>© 2023 ¡HEY!STORE&CO - Todos Los Derechos Reservados</StyledPIcons>
    <StyledDivFooterRigth><StyledPIcons>Developed with</StyledPIcons><StyledDivFooterInside><FaReact/><TbBrandJavascript/></StyledDivFooterInside> </StyledDivFooterRigth>


  </StyledFooterContainerItems></div>
  )
}

export default FooterDerechos