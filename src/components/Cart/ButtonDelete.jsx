import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button
  } from '@chakra-ui/react'
import styled from "styled-components";

const StyledAlertDialog = styled(AlertDialog)`
  z-index: 1000;

  
`;

const StyledModal = styled(AlertDialogOverlay) `

  @media (max-width: 425px) {
    width: 105vw !important;
  }
`
const StyledAlertDialogContent = styled(AlertDialogContent)`
  z-index: 1000;

  
`;

const StyledDivContent = styled.div`
  height: 100%;
    z-index: 1000;
    background: white;
    width: 52%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem;

    @media (max-width: 700px) {
      width: 70%;
    }  
`;

const StyledButtonAlert = styled(Button)`
  border-radius: 10px;
  background-image: linear-gradient(to left,  #f7b9c6 , var(--pink),  #f7b9c6 ); 
  color: white;
  font-weight: 600;  
  border: grey solid 1px;  
  text-shadow: 0 0 3px #838383, 0 0 5px #555555;

  @media (max-width: 700px) {
    font-size: 14px;
  }

  
`;



const ButtonDelete = ({onCleanCart}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    

    return (
      <>
        <Button onClick={onOpen} className="btn-clear-all">
          Eliminar
        </Button>
  
        <StyledAlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <StyledModal className="position-fixed-cart">
            <StyledAlertDialogContent className="position-aboslute-alert">
                <StyledDivContent><AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Eliminar el Carrito
              </AlertDialogHeader>
  
              <AlertDialogBody>
              ¿Estas seguro de continuar con esta acción?
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <StyledButtonAlert ref={cancelRef} onClick={onClose}>
                  Cancelar
                </StyledButtonAlert>
                <StyledButtonAlert colorScheme='red' onClick={()=>{ onClose(); onCleanCart()}} ml={3}>
                  Eliminar
                </StyledButtonAlert>
              </AlertDialogFooter></StyledDivContent>
              
            </StyledAlertDialogContent>
          </StyledModal>
        </StyledAlertDialog>
      </>
    )
}


export default ButtonDelete