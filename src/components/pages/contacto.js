import React, {useEffect, useRef, useState} from 'react'
import Cart from "../Cart/Cart";
import styled from "styled-components";
import { BsMailbox2, BsFillTelephoneInboundFill} from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FiMapPin } from 'react-icons/fi';
import {useLocalStorage} from "../../hooks/useLocalStorage.js"
import FooterDerechos from '../Footer/FooterDerechos';

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
  width: 30%;
  padding: 3rem 0 0 5rem;
  align-items: flex-start;

  @media (max-width: 1100px) {
    
  padding: 3rem 0 0 1rem;
  width: 40%;
  }
  @media (max-width: 767px) {
    
  padding: 2rem 0 0 3rem;
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
  }
  @media (max-width: 480px) {
    padding: 2rem 0 0 2rem;
    display: flex;
  flex-direction: column;
  align-items: flex-start;
  }
`;

const StyledSectionRight = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;

  @media (max-width: 767px) {
    
    width: 100%;
    padding-bottom: 2rem;
  }
`;

const StyledP = styled.p `
    font-size: 20px;
    font-family: 'Roboto';
    margin: 0;
    width: 70%;
    text-align: initial;
    margin: 0 0 0.5rem 0 ;
  
    @media (max-width: 1200px) {
    
      font-size: 16px;
  }
    @media (max-width: 700px) {
    
        font-size: 14px;
  }
    @media (max-width: 480px) {
    
      width: 80%;
  }

  
`
const StyledPLeft = styled.p `
    font-size: 20px;
    font-family: 'Roboto';
    margin: 0;
    width: 100%;
    text-align: initial;
    margin: 0 0 3rem 0 ;
  
    @media (max-width: 1200px) {
    
      font-size: 16px;
  }
    @media (max-width: 770px) {
        margin: 0;
        font-size: 12px;
        width: 82%;
  }

  
`
const StyledPTitulo = styled.p `
    font-size: 24px;
    font-family: 'Roboto';
    margin: 0 0 1rem 0;
    text-align: initial;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: flex-start;

   
    @media (max-width: 1200px) {
    
      font-size: 20px;
  }
    @media (max-width: 780px) {
        width: 50%;
        font-size: 14px;
  }
`
const StyledDiv = styled.div `
   width: 100%;
   display: flex;
    flex-direction: row;    
    justify-content: center;
    align-content: center;    
    align-items: flex-start;

  
    @media (max-width: 740px) {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    
    align-items: center;
    width: 48%;

  }
    @media (max-width: 480px) {
      width: 100%;


  }
`

const StyledForm = styled.form  `
  display: flex;
  flex-direction: column;
  height:  100%;
  width: 100%;
  align-items: center;
  padding: 3rem 1rem 0 1rem;
  @media (max-width: 480px) {
    
    padding: 3rem 1rem 0 0rem;
}

`
const StyledInput = styled.input `
  margin: 0 0 1rem 0;
  width: 70%;
  font-size: 18px;
  height: 40px;
  border-radius: 10px;
  @media (max-width: 1200px) {
    
    font-size: 14px;
}
  @media (max-width: 700px) {
  
      font-size: 10px;
}
  @media (max-width: 480px) {
  
    width: 80%;
}
&:focus{
    box-shadow: 1px 1px 20px 3px var(--pink);
    -webkit-box-shadow: 1px 1px 20px 3px var(--pink);
    -moz-box-shadow: 1px 1px 20px 3px var(--pink);
  }
`

const StyledButtonEnviar = styled.button `
  font-size: 0.9rem;
    background: linear-gradient(90deg,   #f7b9c6 , var(--pink),  #f7b9c6);
    color: white;
    font-weight: 700;
    padding: 15px 30px;
    border-radius: 1rem;
    cursor: pointer;
    border: grey solid 2px;
    margin-top: 3rem;

`

const StyledTextarea = styled.textarea `

  height: 200px;
    width: 70%;
    font-size: 20px;
    font-family: 'Roboto';
    border-radius: 10px;
  
    @media (max-width: 1200px) {
    
      font-size: 16px;
  }
    @media (max-width: 700px) {
    
        font-size: 10px;
  }
    @media (max-width: 480px) {
    
      width: 79%;
  }

 &:focus{
  box-shadow: 1px 1px 20px 3px var(--pink);
  -webkit-box-shadow: 1px 1px 20px 3px var(--pink);
  -moz-box-shadow: 1px 1px 20px 3px var(--pink);
}
`
const StyledButton = styled.button`
  width: 80px;
  background: none;
  height: 3.5rem;
  border: none;

  @media (max-width: 940px) {
    display: flex;
    margin: 0;
  }
`;

const DivHeigth = styled.div`
    height: 800px;
  @media (min-width: 2560px) {
    height: 1300px;
  }  
  @media (max-width: 480px) {
    height: 1000px;
  }  
`;
const Contacto = () => {

    
  const [allProducts, setAllProducts] = useState(JSON.parse(localStorage.getItem("cartContainer"))|| []);
  const [total, setTotal] = useState(JSON.parse(localStorage.getItem("totalContainer"))|| 0);
  const [countProducts, setCountProducts] = useState(JSON.parse(localStorage.getItem("countContainer"))|| 0);
  const count = 0
  const [quatityProducts, setQuantityProducts] = useState(0);    
const updateLsCart = () => {
      localStorage.setItem("cartContainer", JSON.stringify(allProducts))
  }

  const [countTimes, setCountTimes] = useState(0);

  function handleClick() {
    setCountTimes(countTimes + 1);
  }  
const [active, setActive] = useState(false);


const closeToggle = () =>  setActive(false);
  const onCleanForm = () => {
    
	  localStorage.removeItem("nombre")
	  localStorage.removeItem("email")
	  localStorage.removeItem("telefono")
	  localStorage.removeItem("asunto")
	  localStorage.removeItem("mensaje")

  };



  const [nombre, setNombre ] = useLocalStorage('nombre', '')
  const [email, setEmail ] = useLocalStorage('email', '')
  const [telefono, setTelefono ] = useLocalStorage('telefono', '')
  const [asunto, setAsunto ] = useLocalStorage('asunto', '')
  const [mensaje, setMensaje ] = useLocalStorage('mensaje', '')
  

const inputRefEmail = useRef();
const inputRefNombre = useRef();
const inputRefTelefono = useRef();
const inputRefAsunto = useRef();

useEffect(() => {
    const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if(email === ''){
      inputRefEmail.current.style.border= "1px solid grey"
      return
    }
    if(!re.test(email)) {      
      inputRefEmail.current.style.border = '3px solid red'
      return
    }     
    inputRefEmail.current.style.border = '1px solid green'
    return
}, [email])

useEffect(() => {
    const re = /^(?:(?:54))?9?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
    if(telefono === ''){
      inputRefTelefono.current.style.border= "1px solid grey"
      return
    }
    if(!re.test(telefono)) {      
      inputRefTelefono.current.style.border = '3px solid red'
      return
    }     
    inputRefTelefono.current.style.border = '1px solid green'
    return
}, [telefono])
useEffect(() => {
    const re = /^[A-Za-z\s0-9]{4,20}$/;
    if(asunto === ''){
      inputRefAsunto.current.style.border= "1px solid grey"
      return
    }
    if(!re.test(asunto)) {      
      inputRefAsunto.current.style.border = '3px solid red'
      return
    }     
    inputRefAsunto.current.style.border = '1px solid green'
    return
}, [asunto])



useEffect(() => {
    const re = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+[']{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+[']{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
    
    if(nombre === ''){
      inputRefNombre.current.style.border= "1px solid grey"
      return
    }
    if(!re.test(nombre)) {      
      inputRefNombre.current.style.border = '3px solid red'
      return
    }     
    inputRefNombre.current.style.border = '1px solid green'
    return
}, [nombre])


const RecargarPagina = () => {
  window.location.href = window.location.href
}

  
  return (
    <DivHeigth>
        <Cart 
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        count = {count}
        setCountProducts={setCountProducts}
        quatityProducts={quatityProducts}
        setQuantityProducts={setQuantityProducts}
        updateLsCart={updateLsCart}
        allProducts={allProducts}
        setActive={setActive}
        active={active}
        closeToggle={closeToggle}        
        handleClick={handleClick}
        setCountTimes={setCountTimes}
        
        
        > <StyledButton ></StyledButton></Cart>
        <StyledContainer>
          <StyledSectionLeft>
          <StyledDiv>
            <StyledPTitulo> <BsMailbox2/>   EMAIL: </StyledPTitulo>
            <StyledPLeft>contacto@¡HEY!Store.com</StyledPLeft> 
          </StyledDiv>

          <StyledDiv>
            <StyledPTitulo> <AiOutlineClockCircle/> HORARIOS: </StyledPTitulo>
            <StyledPLeft>Abierto de 10 a 21 Hs</StyledPLeft> 
          </StyledDiv>

          <StyledDiv>
            <StyledPTitulo> <BsFillTelephoneInboundFill/>TELÉFONO: </StyledPTitulo>
            <StyledPLeft>54 911 4778-5098</StyledPLeft>  
          </StyledDiv>

          <StyledDiv>
            <StyledPTitulo> <FiMapPin/>   Ubicación: </StyledPTitulo>
            <StyledPLeft><a href="https://goo.gl/maps/tmbEy39Dwnr8X8WR8" target="_blank" rel="noreferrer">Cordoba 800, Buenos Aires, CABA </a></StyledPLeft>   
          </StyledDiv> 
         </StyledSectionLeft>
         <StyledSectionRight>
            <StyledForm name='form' type="form" >
            <StyledP>Nombre</StyledP> 
            <StyledInput placeholder='Debe tener mas de un caracter y no debe utilizar: * - _ /'
            type='nombre' 
            name='nombre' 
            ref = { inputRefNombre}
            onChange={e => setNombre(e.target.value)}
            value={nombre}
            />
            <StyledP>Email</StyledP> 
            <StyledInput placeholder='Debe incluir "@" y ".com"'
              ref = { inputRefEmail}
              type='email' 
              name='email'
              value={email}
              onChange ={ e => setEmail(e.target.value)}/>
            
            <StyledP>Telefono</StyledP> 
            <StyledInput placeholder='No debe incluir "+" sino 54911'            
            ref = { inputRefTelefono}
            type='telefono' 
            name='telefono'
            value={telefono}
            onChange ={ e => setTelefono(e.target.value)}/>

            <StyledP>Asunto</StyledP> 
            <StyledInput placeholder='No debe contener entre 4 y 20 caracteres'
            ref = { inputRefAsunto}
            type='asunto' 
            name='asunto'
            value={asunto}
            onChange ={ e => setAsunto(e.target.value)}/>

            <StyledP>Mensaje</StyledP>   
            <StyledTextarea className='input-mensaje'
            placeholder='Detallar su problema o consulta'
            type='mensaje' 
            name='mensaje'
            value={mensaje}
            onChange ={ e => setMensaje(e.target.value)}/>

          </StyledForm>      
          
         <StyledButtonEnviar type='submit' onClick={()=>{onCleanForm(); RecargarPagina()}} className="button-contacto" >Enviar</StyledButtonEnviar> 

         

         </StyledSectionRight>
         
        </StyledContainer>

    </DivHeigth>

    
  )
}

export default Contacto