import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    Input, 
    Select,
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledDivFormulario = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  height: max-content;
    width: 70%;
    gap: 10px;

 
`;
const StyledDivCheckBox = styled.div`
  display: flex;
  flex-direction: row;
    height: 20px;
    width: 100%;
`;

const StyledForm = styled(Form) `
        box-sizing: border-box;
    width: 100%;
`
const StyledFormik = styled(Formik) `
        box-sizing: border-box;
    width: 100%;
`
const StyledInputGrande = styled(Input) `
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    width: 70%;
    line-height: inherit;
`
const StyledInputPequeño = styled(Input) `
        margin: 0;
    font-family: inherit;
    font-size: inherit;
    width: 100%;
    line-height: inherit;
`
const StyledInputCheckbox= styled.input `
       width: max-content;
    margin-right: 1rem;
`
const StyledButtonSubmit= styled.button `
    cursor: pointer;
    width: 100px;
`

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
        initialValues={{ user: 'Nombre' }}
        onSubmit={(values, actions) => {
        setTimeout(() => {
          alert("Se guardo la información"+"\n"+"Usuario: "+JSON.stringify(values.user, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <StyledForm>
          <Field name='user' validate={validatePasswordAndName}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.user && form.touched.user}>
                <FormLabel>Usuario</FormLabel>
                <StyledInputGrande {...field} placeholder='Aqui va tu usuario' />
                <FormErrorMessage>{form.errors.user}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          
          <Field name='password' validate={validatePasswordAndName}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.password && form.touched.password}>
                <FormLabel>Contraseña</FormLabel>
                <StyledInputGrande {...field} placeholder='Aqui va tu contraseña' />
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <StyledDivFormulario>
                <Field name='name' validate={validateName}>
                    {({ field, form }) => (
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                        <FormLabel>Nombre</FormLabel>
                        <StyledInputPequeño {...field} placeholder='Aqui va tu nombre' />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                    )}
                </Field>
                <Field name='surname' validate={validateName}>
                    {({ field, form }) => (
                    <FormControl isInvalid={form.errors.surname && form.touched.surname}>
                        <FormLabel>Apellido</FormLabel>
                        <StyledInputPequeño {...field} placeholder='Aqui va tu apellido' />
                        <FormErrorMessage>{form.errors.surname}</FormErrorMessage>
                    </FormControl>
                    )}
                </Field>
          </StyledDivFormulario>
          <Field name='email' validate={validateEmail}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
                <FormLabel>Email</FormLabel>
                <StyledInputGrande {...field} placeholder='Aqui va tu email' />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name='cellphone' validate={validateCellphone}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.cellphone && form.touched.cellphone}>
                <FormLabel>Teléfono</FormLabel>
                <StyledInputGrande {...field} placeholder='Aqui va tu número celular' />
                <FormErrorMessage>{form.errors.cellphone}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <StyledDivFormulario>
            <FormControl>
                <FormLabel>Provincia</FormLabel>
                <Select placeholder='Select country'>
                    <option>CABA</option>
                    <option>Cordoba</option>
                    <option>Buenos Aires</option>
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel isRequired>Condición frente al IVA</FormLabel>
                <Select placeholder='Select country'>
                    <option>Responsable Inscripto</option>
                    <option>Consumidor Finañ</option>
                    <option>Monotributista</option>
                </Select>
            </FormControl>
            </StyledDivFormulario>
           
            <StyledDivCheckBox><StyledInputCheckbox type="checkbox"></StyledInputCheckbox><p>Deseo recibir información sobre novedades y ofertas</p></StyledDivCheckBox>

            <StyledButtonSubmit
            mt={4}
            colorScheme='teal'
            isLoading={props.isSubmitting}
            type='submit'
          >
            Submit
          </StyledButtonSubmit>
          
        </StyledForm>
      )}


        
    </StyledFormik>
  )
}

export default FormularioRegistro