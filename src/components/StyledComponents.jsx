import styled from 'styled-components';

// exported to Header.jsx
export const HeaderBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border: solid yellow;
`

// exported to NavBar.jsx
export const NavBox = styled.nav`
    width: 100vw;
    border: solid green;
    align-self: center;
`

// exported to Socials.jsx
export const SocialBox = styled.div`
    width: 100vw;
    align-self: center;
    border: solid red;
`

// exports to Logo.jsx
export const LogoBox = styled.div`
    text-align: center;
    text-shadow: -1px -1px orangered;
    width: 50vw;
    color: #ff44008e;
    align-self: flex-start;
    border: solid blue;
`

export const LogoImg = styled.img`
    box-sizing: border-box;
    width: 8rem;
`