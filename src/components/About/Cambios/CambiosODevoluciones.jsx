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

    @media (max-width: 480px) {
      height: 100%;
      padding: 0px 1rem 0 0;
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
const CambiosODevoluciones = () => {
  return (
    <StyledDiv>
    <StyledH2> Cambios o Devoluciones</StyledH2>
    <StyledPTitulo> ¿Puedo realizar cambios?</StyledPTitulo> 
    <StyledP>Podes realizar cambios dentro de los 30 días de recibida tu compra por otro artículo de igual valor, u otros artículos equivalentes al valor del comprado. Será respetado el valor abonado al momento de la compra. La prenda a cambiar debe presentar las mismas condiciones con las cuales fue despachada, conservar etiquetas, embalaje original, y si tuviese pares y accesorios completos.</StyledP>
      
    
     <StyledPTitulo>¿Todas las prendas tienen cambio?</StyledPTitulo>  
    <StyledP>Podrás cambiar cualquier artículo adquirido en la tienda. Recorda que las prendas deben tener sus etiquetas originales, en cuanto a trajes de baño y ropa interior tienen cambio, pero los mismos pueden estar sujetos a aprobación ya que no deben presentar señales de uso. Si presentase señales el mismo puede no ser cambiado.</StyledP>
    
     <StyledPTitulo>¿Puedo devolver y pedir el dinero?</StyledPTitulo>  
    <StyledP>Si la prenda no era lo que deseabas se puede realizar un cambio, o podrás hacer uso de tu dinero a favor dentro de los 60 días de generado el reclamo para realizar un cambio. En caso de optar por esta modalidad, tene en cuenta que no se hará devolución del dinero, luego de pasado los 60 días. Se realiza devolución de dinero, siempre y cuando esté dentro del plazo de los 10 días de recibido el pedido, recorda que la prenda se debe encontrar en perfecto estado. El comprador deberá enviar la prenda mediante el correo</StyledP>
     <StyledPTitulo>¿El cambio tiene costo?</StyledPTitulo>  
    <StyledP>Los cambios tienen un costo el cual varia según la localidad, por eso contamos con la modalidad de servicio contra entrega, es decir el correo se acerca a tu domicilio con el cambio solicitado, y en el mismo momento retira la prenda a devolver. En caso de que tu compra haya tenido envío gratis, el primer cambio será sin costo.</StyledP>
    
   


    </StyledDiv>
  )
}

export default CambiosODevoluciones