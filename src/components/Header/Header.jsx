import React from 'react';
import NavBar from './NavBar';
import Socials from './Socials';
// import Logo from './Logo'

const Header = () => {
    return (
        <div className='container-fluid'>
            {/* <Logo /> */}
            <NavBar />
            <Socials />
        </div>
    )
}

export default Header