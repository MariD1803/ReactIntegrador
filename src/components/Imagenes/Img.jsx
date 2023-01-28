import React from 'react'
import styled from "styled-components";

const StyledImgBig = styled.img `
    height:100%;
    width: 100%;
`




export const Img = (props) => {
    return (
        <StyledImgBig src={props.src} alt="imagen"  />
    )
}