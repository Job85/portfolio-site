import React from 'react';
import logo from '../../assets/logo.png';
import '../../scss/components/_logo.scss';

const Logo = () => {
    return (
        <div className='img-div'>
            <img src={logo} className='img-fluid' alt="mirrored jj" />
        </div>
    )
}

// exported to Header.jsx
export default Logo