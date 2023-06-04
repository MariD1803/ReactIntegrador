import React from 'react'
import styled from 'styled-components'

const StyledDivNosotros = styled.div`
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
      margin-top: 0;
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
const StyledPMove = styled.p `   
    font-size: 20px;
    font-family: 'Roboto';
    margin: 0 0 1rem 0;
    width: 63%;
    height: 51px;
    text-align: justify;
    display: flex;
    flex-direction: row;


    @media (max-width: 2700px) {
    
    width: 73%;
  }

  @media (max-width: 1200px) {
    
    font-size: 16px;
}
  @media (max-width: 700px) {
    margin: 0 !important;
   
    width: 85%;
}
`

const StyledH2Animation = styled.p`
  text-shadow: 3px 3px 0 var(--color-secondary), 6px 6px 0 var(--color-tertiary),
    9px 9px var(--color-quaternary), 12px 12px 0 var(--color-quinary);
  font-family: "cursiva";
  font-weight: 900;
  text-transform: uppercase;
  font-size: 20px;
  text-align: center;
  margin: 0 !important;
  color: red;
  animation: shadows 1.2s ease-in infinite, move 1.2s ease-in infinite;
  letter-spacing: 0.4rem;
  height: 100%;
  width: 100px;

  @media (max-width: 1200px) {
    font-size: 16px;
}
  @media (max-width: 700px) {
    width: 90px;
    font-size: 18px;
}
  @media (max-width: 480px) {
    width: 86px;
    font-size: 12px;
}
`

const StyledDivImage= styled.div`
    height: 40%;
    width: 70%;
    border-radius: 10px;

    @media (max-width: 700px) {
        width: 75%;
        height: 30%;
    }
    @media (max-width: 480px) {
        height: 200px;
        width: 80%;
    }
`

const Nosotros = () => {
  return (
    <StyledDivNosotros>
        <StyledH2> ¿Quiénes somos?</StyledH2>

        <StyledPMove>¡Hola, somos <StyledH2Animation>¡Hey!</StyledH2Animation> <b> Store</b></StyledPMove>        
        <StyledP>Un emprendimiento familiar de moda femenina. Nos caracterizamos siempre por tener productos de tendencia, con variedad para todos nuestros clientes.</StyledP>
        <StyledP>En nuestra página podrás encontrar esa prenda que le falta a tu armario o ese accesorio para completar tu look y por qué no elegir otra más ya que contamos con una gran variedad de diseños casuales y formales a precios accesibles.</StyledP>
        <StyledP>Porque <b>¡Hey! Store</b> nace para mujeres como vos, para que con su estilo propio y único puedan encontrar variedad de marcas y talles con una gran calidad diferencial en un solo lugar.</StyledP>
        <StyledP> Además sabemos la importancia de recibir cada pedido en tu hogar y por eso hacemos envíos a cada parte del país.</StyledP>
        <StyledP>Y por último, pero no menos importante, estaremos en cada momento que lo necesites para asesorarte o guiarte. También podes seguirnos en redes sociales para que podamos estar conectados y nos sigamos conociendo.</StyledP>
    
        <StyledDivImage className="imagen-nosotros"> </StyledDivImage>

    </StyledDivNosotros>
  )
}

export default Nosotros