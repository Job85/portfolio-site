import React from 'react';
import NavBar from './NavBar';
import Socials from './Socials';
// import Logo from './Logo'
import '../../scss/layout/_header.scss';

const Header = () => {
    return (
        <div className='container-fluid'>
            <div className='header'>
                {/* <Logo /> */}
                <NavBar />
                <Socials />
            </div>
        </div>
    )
}

export default Header