import React from 'react'
import styled from "styled-components";
import imagen1 from '../../../utils/images/Hero/First.png'
import imagen2 from '../../../utils/images/Hero/Second.png'
import imagen3 from '../../../utils/images/Hero/Three.png'
import imagen4 from '../../../utils/images/Hero/Fourth.png'

const StyledImgBig = styled.img `
    height:100%;
    width: 100%;
`
const StyledImgSmall= styled.img `
    height:100%;
    width: 90%;
    
`




export const SecondImg = () => {
    return (
        <StyledImgBig src={imagen2} alt="imagen2"  />
    )
}
export const FirstImg = () => {
    return (
        <StyledImgBig src={imagen1} alt="imagen1"  />
    )
}

export const ThirdImg = () => {
    return (
        <StyledImgSmall src={imagen3} alt="imagen3"  />
    )
}

export const FourthImg = () => {
    return (
        <StyledImgSmall src={imagen4} alt="imagen4"  />
    )
}
