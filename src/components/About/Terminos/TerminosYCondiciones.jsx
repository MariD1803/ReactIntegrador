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

const TerminosYCondiciones = () => {
  return (
    <StyledDiv>
    <StyledH2> Terminos y Condiciones</StyledH2>

     <StyledPTitulo> 1. Introducción</StyledPTitulo>  
    <StyledP>Las presentes condiciones generales de uso de la página web, regulan los términos y condiciones de acceso y uso de ¡HEY!STORE.COM.AR, que el usuario del Portal deberá de leer y aceptar para usar todos los servicios e información que se facilitan desde el portal. El mero acceso y/o utilización del portal, de todos o parte de sus contenidos y/o servicios significa la plena aceptación de las presentes condiciones generales de uso.</StyledP>
     
     <StyledPTitulo> 2. Condiciones de uso</StyledPTitulo>  
    <StyledP>Las presentes condiciones generales de uso del portal regulan el acceso y la utilización del portal, incluyendo los contenidos y los servicios puestos a disposición de los usuarios en y/o a través del portal, bien por el portal, bien por sus usuarios, bien por terceros. No obstante, el acceso y la utilización de ciertos contenidos y/o servicios puede encontrarse sometido a determinadas condiciones específicas.</StyledP>
     
     <StyledPTitulo> 3. Modificaciones</StyledPTitulo>  
    <StyledP>La empresa se reserva la facultad de modificar en cualquier momento las condiciones generales de uso del portal. En todo caso, se recomienda que consulte periódicamente los presentes términos de uso del portal, ya que pueden ser modificados.</StyledP>
     <StyledPTitulo> 4. Responsabilidad del portal</StyledPTitulo>  
    <StyledP>El usuario conoce y acepta que el portal no otorga ninguna garantía de cualquier naturaleza, ya sea expresa o implícita, sobre los datos, contenidos, información y servicios que se incorporan y ofrecen desde el Portal.

Exceptuando los casos que la Ley imponga expresamente lo contrario, y exclusivamente con la medida y extensión en que lo imponga, el Portal no garantiza ni asume responsabilidad alguna respecto a los posibles daños y perjuicios causados por el uso y utilización de la información, datos y servicios del Portal.

En todo caso, el Portal excluye cualquier responsabilidad por los daños y perjuicios que puedan deberse a la información y/o servicios prestados o suministrados por terceros diferentes de la Empresa. Toda responsabilidad será del tercero ya sea proveedor o colaborador.</StyledP>
     
   


    </StyledDiv>
  )
}

export default TerminosYCondiciones