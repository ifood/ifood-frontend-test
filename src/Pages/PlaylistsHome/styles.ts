import styled, {css} from 'styled-components';

import background from '../../assets/background-spotifood.jpg';

interface IContentLogin {
  hasToken: boolean;
}

export const Container = styled.div`
  min-height: 100vh;
  display: flex;

  @media (min-width: 500px) {
    justify-content: start;
    text-align: left;
  }
`;

export const Content = styled.div`
  height: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem;
`;

export const SearchNameForm = styled.div`
  align-items: center;
  background-color: #fff;
  border: 2px solid #fff;
  border-radius: 0.3rem;
  display: flex;
  padding: 0 1rem;
  margin-bottom: 2.5rem;

  svg {
    color: #a8a8b3;
  }

  input {
    border: none;
    color: #3a3a3a;
    flex: 1;
    height: 2.8rem;
    padding: 0 1rem;

    &::placeholder {
      color: #a8a8b3;
    }
  }
`;

export const ContainerLogin = styled.div`
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

export const ContentLogin = styled.div<IContentLogin>`
${props =>
    !props.hasToken &&
    css`
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 120px;
    `}

  ${props =>
    props.hasToken &&
    css`
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 120px;
    `}
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


