import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from '../../../utils/assets/logo.png'

const StyledImg = styled.img `
    height: 4em;
    width: 5em;

    @media (max-width: 2600px ) {
        height: 3em;
        width: 3em;
    }
`

const Logo = () => {
    return (
        <Link to="/" >
            <StyledImg src={logo} alt="logo"  />
        </Link>
    )
}

export default Logo