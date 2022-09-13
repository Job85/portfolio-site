import styled from 'styled-components';

// exported to Header.jsx
export const HeaderBox = styled.div`
    display: grid;
    grid-template-areas:
        "logo socials"
        "nav nav nav"
        "nav nav nav";
    border: solid yellow;
`

export const NavBox = styled.nav`
    grid-area: 'nav';
    border: solid green;
`

export const SocialBox = styled.div`
    grid-area: 'socials';
    border: solid red;
`

// exports to Logo.jsx
export const LogoBox = styled.div`
    grid-area: 'logo';
    border: solid blue;
`
export const JLogo = styled.h1`    
    @import url('https://fonts.googleapis.com/css2?family=Parisienne&effect=neon&display=swap');

    text-align: center;
    font-weight: 400;
    font-family: 'Parisienne', cursive;
    text-shadow: -1px -1px orangered;
    color: #ff44008e;
    border: solid black;
`;