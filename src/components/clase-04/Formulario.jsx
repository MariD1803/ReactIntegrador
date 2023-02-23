import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components'
import { Heading } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
  } from '@chakra-ui/react'


const StyledFormControl = styled(FormControl) `
    display: flex;
    margin: 0 auto;
    padding: 0%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 75vh;
`
const StyledInput = styled(Input) `
    padding: 15px 35px 15px 15px;
    border-radius: 8px;
    background-color: #252525;
    color: white;
    outline: none;
    border: none;
    width: 350px;
    

`
const FormField = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 3px;
`

const StyledButton = styled(Button) `
    font-size: 0.9rem;
    background: linear-gradient(90deg, #ffa100, #ff005c);
    color: white;
    font-weight: 700;
    transition: all .3s ease;
    padding: 15px 30px;
    border-radius: 1rem;
    cursor: pointer;

`



const Formulario = () => {

    const initialState = {
        username: '',
        email:'',
    }

    const [error, setError] = useState(false);
    const [form, setForm] = useState(initialState);

    const inputRef = useRef();
    const formRef = useRef();



    const {username, email} =form;

    const handleInputChange=({target}) => {
       const {name, value} = target
       setForm ({
        ...form,
        [name] : value  // Se hace así para que tome dependiendo del valor que voy cambiando/cargando
       });
    }

    /* const onBlur = () => { //Cuando saco de foco algo
        setForm(initialState);
    }
 */
    const onClick = ( )=> {
       setForm(initialState)
    }


    //Muy util, para verificar que el email está correcto
    useEffect(() => {
        const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if(!re.test(email) && email !== '') {
            inputRef.current.style.border = '3px solid red'
            setError(true)
        } else {
            inputRef.current.style.border = '1px solid green'
            setError(false)
        }
    }, [email])

    return (
        <>
         
            <StyledFormControl ref={formRef} isInvalid={error}>
                <Heading as ='h2' size='xl'> Form Clase 4 </Heading>
                <FormField>
                    <FormLabel>Name</FormLabel>
                    <StyledInput 
                    type='text'
                    name='username'
                    value={username} 
                    onChange ={ handleInputChange}
                    />
                </FormField>
                <FormField>
                    <FormLabel>Email address</FormLabel>
                    <StyledInput 
                    ref = { inputRef}
                    type='email' 
                    name='email'
                    value={email}
                    onChange ={ handleInputChange}
                    /* onBlur ={onBlur} */
                    />
                    {!error &&  <FormHelperText>We'll never share your email.</FormHelperText>}                   
                    <FormErrorMessage> *El email es obligatorio</FormErrorMessage>
                </FormField>
                <StyledButton onClick ={onClick}>Enviar</StyledButton>
            </StyledFormControl>
                
        
        </>
    )
}

export default Formulario