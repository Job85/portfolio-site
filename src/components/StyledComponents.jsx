import styled from 'styled-components';

// exported to Header.jsx
export const HeaderBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border: solid yellow;
`

export const NavBox = styled.nav`
    width: 100vw;
    border: solid green;
    align-self: center;
`

export const SocialBox = styled.div`
    width: 100vw;
    align-self: center;
    border: solid red;
`

// exports to Logo.jsx
export const LogoBox = styled.div`
    width: 100vw;
    align-self: flex-start;
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