import styled from 'styled-components';

import background from '../../assets/background-spotifood.jpg';

export const Container = styled.div`
background-image: url(${background});
opacity: .9;
background-size: cover;
background-position: start;
left: 0;
top: 0;
position: relative;
height: 100vh;
align-items: center;

`;

export const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 120px;
`;

export const Logo = styled.div`
`;

export const Title = styled.h1`
color: #E1E6EA  ;
padding: 20px;
`;

export const Button = styled.button`
margin-top: 15px;
padding: 5px;
border-radius: 16px;
background-color: white;
display: flex;
justify-content: space-evenly;
align-items: center;
height: 40px;
width: 230px;
font-size: 16px;
color: black;

transition: background .3s;

&:hover{
    background-image: linear-gradient(#EA1D2C, #1ED760);
    color: white;
}

svg {
   color: #a8a8b3;
}

`;