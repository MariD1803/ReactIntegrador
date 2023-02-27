import React from 'react'
import styled from 'styled-components'
import { BsCreditCard2BackFill } from "react-icons/bs";
import { FcMoneyTransfer, FcTwoSmartphones } from "react-icons/fc";


const DivStyledFooter = styled.div  `
  align-items: center;
  justify-content: space-evenly;
  display: flex;
    height: 200px;
    flex-direction: column;
    width: 100%;
    font-size: 32px;
    background-image: linear-gradient(to left,  #f7b9c824 , #f8a6b900,#f7b9c824  ); 
    margin-bottom: 3rem;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px;

    @media (max-width: 800px) {
      font-size: 24px;
    }

`
const DivStyledFooterContainer = styled.div  `
    width: 90%;
    height: 31%;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;    
    flex-direction: column;
    justify-content: space-evenly;
    flex-direction: row;
    font-size: 60px;

    @media (max-width: 800px) {
      font-size: 50px;
    }

`

const StyledContainerIcons = styled.div  `
  width: 31%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledPIcons = styled.p  `
  font-size: 20px;
  margin: 0;

  @media (max-width: 800px) {
    font-size: 13px;
  }
  @media (max-width: 500px) {
    font-size: 9px;
  }
`



const Footer = () => {
  return (
    <div>
      <DivStyledFooter>
            Fomas de Pago
          <DivStyledFooterContainer>
            <StyledContainerIcons><BsCreditCard2BackFill/> <StyledPIcons>Transferencia / Tarjeta</StyledPIcons></StyledContainerIcons>
            <StyledContainerIcons><FcTwoSmartphones/><StyledPIcons>Mercado Pago</StyledPIcons></StyledContainerIcons>
            <StyledContainerIcons><FcMoneyTransfer/> <StyledPIcons>Efectivo</StyledPIcons></StyledContainerIcons>
            
            
          </DivStyledFooterContainer>  

      </DivStyledFooter>


        
    </div>
  )
}

export default Footer