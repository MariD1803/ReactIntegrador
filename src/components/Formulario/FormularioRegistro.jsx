import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input, 
    Select,
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledDivFormulario = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: max-content;
    gap: 10px;

  @media (max-width: 1100px) {
    width: 90%;
  }

 
`;
const StyledDivCheckBox = styled.div`
  display: flex;
  flex-direction: row;
    height: 20px;
    width: 100%;
    margin: 2rem 0;
    align-items: baseline;
`;
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
      margin: 6rem 0;
  }
`;

const StyledForm = styled(Form) `
        box-sizing: border-box;
    width: 100%;
    @media (max-width: 780px) {
      padding-top: 4rem;
    }
`
const StyledLink = styled(Link) `
    text-decoration: underline !important;
`
const StyledFormik = styled(Formik) `
        box-sizing: border-box;
    width: 100%;
`
const StyledInputGrande = styled(Input) `
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    width: 80%;
    line-height: inherit;
    @media (max-width: 1100px) {
    width: 90%;
  }
`
const StyledInputPequeño = styled(Input) `
        margin: 0;
    font-family: inherit;
    font-size: inherit;
    width: 100%;
    line-height: inherit;
`
const StyledFormControl = styled(FormControl) `
    width: 50%;
`
const StyledSelect = styled(Select) `
    width: 100%;
   
`
const StyledFormLabel = styled(FormLabel) `
    @media (max-width: 480px) {
      height: 45px;
    }
   
`
const StyledInputCheckbox= styled.input `
       width: max-content;
    margin-right: 1rem;
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


let users = []
let passwords = []


const FormularioRegistro = () => {

        function validateName(value) {
            
        const re = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+[']{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+[']{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
        let error
        if (!value) {
            error = '*Campo obligatorio'
        } else if ( !re.test(value)) {
            error = "El campo debe tener mas de un caracter y no debe utilizar: * - _ / o números"
        }
          return error
        }
        function validateEmail(value) {
            
        const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        let error
        if (!value) {
            error = '*Campo obligatorio'
        } else if ( !re.test(value)) {
            error = `Debe incluir "@" y ".com"`
        }
          return error
        }
        function validateCellphone(value) {            
        const re = /^(?:(?:54))?9?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
        let error
        if (!value) {
            error = '*Campo obligatorio'
        } else if ( !re.test(value)) {
            error = `No debe incluir "+" y debe iniciar con 54911`
        }
          return error
        }
        function validatePasswordAndName(value) {            
        const re = /^[A-Za-z\s0-9]{4,16}$/;
        let error
        if (!value) {
            error = '*Campo obligatorio'
        } else if ( !re.test(value)) {
            error = `No debe incluir caracteres especiales y debe ser entre 4 y 16 caracteres`
        }
          return error
        }
        
  return (
    <StyledFormik
        initialValues={{ user: '', password: '' }}
        onSubmit={(values, actions) => {
        setTimeout(() => {
          alert("Se guardo la información"+"\n"+"Usuario: "+JSON.stringify(values.user, null, 2))
          users.push(values.user)
          localStorage.setItem("users", JSON.stringify(users))
          passwords.push(values.password)
          localStorage.setItem("passwords", JSON.stringify(passwords))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <StyledForm>
          <Field name='user' validate={validatePasswordAndName}>
            {({ field, form }) => (
              <FormControl className='margin-button-formulario' isInvalid={form.errors.user && form.touched.user}>
                <FormLabel>Usuario</FormLabel>
                <StyledInputGrande {...field} placeholder='Aqui va tu usuario'/>
                <FormErrorMessage>{form.errors.user}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          
          <Field name='password' validate={validatePasswordAndName}>
            {({ field, form }) => (
              <FormControl className='margin-button-formulario' isInvalid={form.errors.password && form.touched.password}>
                <FormLabel>Contraseña</FormLabel>
                <StyledInputGrande {...field} placeholder='Aqui va tu contraseña' type="password"/>
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <StyledDivFormulario>
                <Field name='name' validate={validateName}>
                    {({ field, form }) => (
                    <StyledFormControl className='margin-button-formulario' isInvalid={form.errors.name && form.touched.name}>
                        <FormLabel>Nombre</FormLabel>
                        <StyledInputPequeño {...field} placeholder='Aqui va tu nombre' />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </StyledFormControl>
                    )}
                </Field>
                <Field name='surname' validate={validateName}>
                    {({ field, form }) => (
                    <StyledFormControl className='margin-button-formulario' isInvalid={form.errors.surname && form.touched.surname}>
                        <FormLabel>Apellido</FormLabel>
                        <StyledInputPequeño {...field} placeholder='Aqui va tu apellido' />
                        <FormErrorMessage>{form.errors.surname}</FormErrorMessage>
                    </StyledFormControl>
                    )}
                </Field>
          </StyledDivFormulario>
          <Field name='email' validate={validateEmail}>
            {({ field, form }) => (
              <FormControl className='margin-button-formulario' isInvalid={form.errors.email && form.touched.email}>
                <FormLabel>Email</FormLabel>
                <StyledInputGrande {...field} placeholder='Aqui va tu email' />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name='cellphone' validate={validateCellphone}>
            {({ field, form }) => (
              <FormControl className='margin-button-formulario' isInvalid={form.errors.cellphone && form.touched.cellphone}>
                <FormLabel>Teléfono</FormLabel>
                <StyledInputGrande {...field} placeholder='Aqui va tu número celular' />
                <FormErrorMessage>{form.errors.cellphone}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <StyledDivFormulario>
            <StyledFormControl className='margin-button-formulario'>
                <StyledFormLabel>Provincia</StyledFormLabel>
                <StyledSelect placeholder='Seleccione provincia'>
                    <option>CABA</option>
                    <option>Cordoba</option>
                    <option>Buenos Aires</option>
                </StyledSelect>
            </StyledFormControl>
            <StyledFormControl className='margin-button-formulario'> 
                <StyledFormLabel isRequired>Condición frente al IVA</StyledFormLabel>
                <StyledSelect placeholder='Seleccione condición'>
                    <option>Responsable Inscripto</option>
                    <option>Consumidor Final</option>
                    <option>Monotributista</option>
                </StyledSelect>
            </StyledFormControl>
            </StyledDivFormulario>
           
            <StyledDivCheckBox>
              <StyledInputCheckbox type="checkbox"></StyledInputCheckbox>
              <p className='p-formulario-registro'>Deseo recibir información sobre novedades y ofertas</p>
            </StyledDivCheckBox>
            <StyledDivCheckBox>
              <StyledInputCheckbox type="checkbox"></StyledInputCheckbox>
              <p className='p-formulario-registro'>He podido leer y entiendo la Política de los <StyledLink to="/about">Terminos y condiciones</StyledLink></p>
            </StyledDivCheckBox>
            <StyledDivButton>
              <StyledButtonSubmit
                mt={4}
                colorScheme='teal'
                isLoading={props.isSubmitting}
                type='submit'
              >
               Submit
              </StyledButtonSubmit>
            </StyledDivButton>
            <StyledDivIngresar>
              <p className='p-formulario-registro'>¿Ya tienes cuenta? <StyledLink to="/ingresar">Ingresar</StyledLink></p>
            </StyledDivIngresar>
            
          
        </StyledForm>
      )}


        
    </StyledFormik>
  )
}

export default FormularioRegistro