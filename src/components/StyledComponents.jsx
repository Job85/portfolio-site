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
    text-align: center;
    text-shadow: -1px -1px orangered;
    width: 50vw;
    color: #ff44008e;
    align-self: flex-start;
    border: solid blue;
    `
export const JLogo = styled.h1`
   @import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');
   
    font-family: 'Parisienne', cursive;
    color: #ff44008e;
    text-shadow: -1px -1px orangered;
    font-weight: 400;
    display: inline-block;
    margin: 0;
`;

export const JLogo2 = styled.h1`    
    @import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');
    
    font-family: 'Parisienne', cursive;
    color: #ff44008e; 
    text-shadow: -1px -1px orangered;
    font-weight: 400;
    display: inline-block;
    margin: 0;
    transform: scale(-1, 1);
    -moz-transform: scale(-1, 1);
    -webkit-transform: scale(-1, 1);
    -o-transform: scale(-1, 1);
    -ms-transform: scale(-1, 1);
    transform: scale(-1, 1);    
`;