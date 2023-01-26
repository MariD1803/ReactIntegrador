import React from "react";
import styled from "styled-components";
import logo from '../../utils/assets/logo.png'

const StyledImg = styled.img `
    height: 3em;
    width: 3em;
`

const Logo = () => {
    return (
        <div>
            <StyledImg src={logo} alt="logo"  />
        </div>
    )
}

export default Logo