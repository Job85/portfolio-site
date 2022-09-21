import React from 'react';
import { LogoBox, LogoImg } from './StyledComponents';
import logo from '../assets/logo.png';

const Logo = () => {
    return (
        <LogoBox>
            <LogoImg src={logo} alt="mirrored jj" />
        </LogoBox>
    )
}

// exported to Header.jsx
export default Logo