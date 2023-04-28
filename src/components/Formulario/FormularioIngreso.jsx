import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input, 
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';




const StyledInputGrande = styled(Input) `
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    width: 80%;
    line-height: inherit;
    height: 50px;
    border-radius: 10px;
    border: grey solid 2px;
    @media (max-width: 1100px) {
    width: 90%;
  }

  &:focus{
    box-shadow: 1px 1px 20px 3px var(--pink);
    -webkit-box-shadow: 1px 1px 20px 3px var(--pink);
    -moz-box-shadow: 1px 1px 20px 3px var(--pink);
  }
`
const StyledFormik = styled(Formik) `
    box-sizing: border-box;
    width: 100%;
`
const StyledDivIngresar = styled.div`
  display: flex;
  flex-direction: row;
    height: 20px;
    width: 80%;
    margin: 2rem 0;
    align-items: center;
    justify-content: center;
    @media (max-width: 1100px) {
    width: 90%;
  }
    @media (max-width: 480px) {
      margin: 3rem 0.5rem;
  }

`;

const StyledForm = styled(Form) `
        box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 780px) {
      padding-top: 4rem;
    }
    @media (max-width: 480px) {
        padding-top: 1rem;
    }
`

const StyledLink = styled(Link) `
    text-decoration: underline !important;
`
const StyledFormLabel = styled(FormLabel) `
    width: 80%;
    text-align: initial;
    margin-top: 1rem;
    font-size: 20px;
    @media (max-width: 700px) {
        font-size: 16px;
    }
    @media (max-width: 480px) {
        font-size: 13px;
    }
`

const StyledFormControl = styled(FormControl) `
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 700px) {
    width: 80%;
  }
`

const StyledDivButton = styled.div`
  display: flex;
  flex-direction: row;
    width: 100%;
    margin: 2rem 0;
    width: 80%;
    margin: 2rem 0;
    align-items: center;
    justify-content: center;
    @media (max-width: 1100px) {
    width: 90%;
  }
    @media (max-width: 480px) {
      margin: 4rem 0;
  }
`

const StyledButtonSubmit= styled.button `
    cursor: pointer;
    font-size: 0.9rem;
    background: linear-gradient(90deg,#f7b9c6 ,var(--pink),#f7b9c6);
    color: white;
    font-weight: 700;
    padding: 15px 30px;
    border-radius: 1rem;
    cursor: pointer;
    border: grey solid 2px;
`


const FormularioIngreso = () => {
    const users = JSON.parse(localStorage.getItem('users'))
    const passwords = JSON.parse(localStorage.getItem('passwords'))

    function validateUser(value) {
        let error
        if (!value) {
          error = 'Usuario requerido'
          return error
        } 
        for (let user of users  ) {               
            if (user === value){
                return
            }
           
        }
        error = 'El usuario no existe'
        return error
        
      }
    
    function validatePassword(value) {
        let error
        if (!value) {
          error = 'Contraseña requerida'
          return error
        } 
        for (let password of passwords  ) {               
            if (password === value){
                return
            }
           
        }
        error = 'La contraseña no es valida'
        return error
        
      }
    
      return (
        <StyledFormik
          initialValues={{ user: '', password: '' }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert("Se ha logueado el usuario "+JSON.stringify(values.user, null, 2))
              actions.setSubmitting(false)
            }, 1000)
          }}
        >
          {(props) => (
            <StyledForm>
            <Field name='user' validate={validateUser}>
            {({ field, form }) => (
              <StyledFormControl className='margin-button-formulario' isInvalid={form.errors.user && form.touched.user}>
                <StyledFormLabel>Usuario</StyledFormLabel>
                <StyledInputGrande {...field} placeholder='Aqui va tu usuario'/>
                <FormErrorMessage>{form.errors.user}</FormErrorMessage>
              </StyledFormControl>
            )}
          </Field>
            <Field name='password' validate={validatePassword}>
            {({ field, form }) => (
              <StyledFormControl className='margin-button-formulario' isInvalid={form.errors.password && form.touched.password}>
                <StyledFormLabel>Contraseña</StyledFormLabel>
                <StyledInputGrande {...field} placeholder='Aqui va tu contraseña' type="password"/>
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </StyledFormControl>
            )}
          </Field>
          <StyledDivButton>
              <StyledButtonSubmit
                mt={4}
                colorScheme='teal'
                isLoading={props.isSubmitting}
                type='submit'
              >
               Iniciar Sesión
              </StyledButtonSubmit>
            </StyledDivButton>
              <StyledDivIngresar>
                <p className='p-formulario-registro'>¿No tienes cuenta? <StyledLink to="/registro">Crear cuenta</StyledLink></p>
              </StyledDivIngresar>
            
            </StyledForm>
          )}
        </StyledFormik>
      )
}

export default FormularioIngreso