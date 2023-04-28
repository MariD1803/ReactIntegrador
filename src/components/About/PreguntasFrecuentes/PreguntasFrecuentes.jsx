import React from 'react'
import styled from 'styled-components'


const StyledDiv = styled.div`
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;  
    @media (max-width: 780px) {
      margin-top: 15%;
    }

    @media (max-width: 480px) {
      height: 100%;
      padding: 0px 0 0 1rem;
    }
  

`

const StyledH2 = styled.h2 `
    font-size: 43px;
    font-family: 'Roboto';
    margin: 2rem 0 3rem 0;

    @media (max-width: 1200px) {
    
      font-size: 34px;
  }
    @media (max-width: 700px) {
      font-size: 24px;
    
}
`

const StyledP = styled.p `
    font-size: 20px;
    font-family: 'Roboto';
    margin: 0 0 1rem 0;
    width: 63%;
    text-align: justify;

    @media (max-width: 2700px) {
    
    width: 73%;
  }
    @media (max-width: 1200px) {
    
      font-size: 16px;
  }
    @media (max-width: 700px) {
      width: 85%;
       
  }
`
const StyledPTitulo = styled.p `
    font-size: 24px;
    font-family: 'Roboto';
    margin: 0 0 1rem 0;
    width: 63%;
    text-align: justify;

    @media (max-width: 2700px) {
    
    width: 73%;
  }
    @media (max-width: 1200px) {
    
      font-size: 20px;
  }
    @media (max-width: 700px) {
      width: 85%;
       
  }
`
const PreguntasFrecuentes = () => {
  return (
    <StyledDiv>
    <StyledH2> Preguntas Frecuentes</StyledH2>

     <StyledPTitulo> ¿Cuáles son los medios de pago?</StyledPTitulo>  
    <StyledP>Podés abonar a través de Mercado Pago (tarjeta de crédito, débito y dinero en cuenta), transferencia o depósito bancario y efectivo en la tienda.</StyledP>
     <StyledPTitulo> ¿Cuánto demoran en armar el pedido?</StyledPTitulo>  
    <StyledP>Una vez que el pago está acreditado, el pedido demora entre 24 y 48 horas hábiles en armarse. En épocas de eventos puede demorarse un poco más. Siempre trataremos de armartelo lo más rápido posible.</StyledP>
    <StyledPTitulo> ¿Como comprar?</StyledPTitulo>  
    <StyledP>Para comprar seguí los siguientes pasos:
    <p>1 - Selecciona las prendas deseadas, indicando el talle, podes buscar por filtro en talle y color. Agregalas al carrito.</p>
    <p>2 - Luego finaliza la compra el carrito en el boton de "Compra".  </p>
    <p>3 - Previamente debes completar tus datos en la página de registro, recorda indicarlos correctamente para recibir la información y pedido.</p>
    <p>4 - ¡Y listo! estarás recibiendo todo en tu mail.</p></StyledP>
    <StyledPTitulo> ¿Hay mínimo o máximo de compra?</StyledPTitulo>  
    <StyledP> La compra mínima es de un producto, y no contamos con una cantidad máxima.</StyledP>
   


    </StyledDiv>
  )
}

export default PreguntasFrecuentes