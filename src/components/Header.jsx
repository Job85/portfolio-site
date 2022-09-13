import React from 'react';
import { HeaderBox } from './StyledComponents';
import NavBar from './NavBar';
import Socials from './Socials';
import Logo from './Logo'

const Header = () => {
    return (
        <HeaderBox>
            <Logo />
            <NavBar />
            <Socials />
        </HeaderBox>
    )
}

export default Header