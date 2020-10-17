import styled from 'styled-components';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: white;
`;

const Header = styled.header`
  border-right: 1px solid black;
  background: #fa2d3b;
  h1 {
    margin-top: 0px;
    text-align: center;
    padding: 1rem 0;
    color: #ffff;
    font-size: 2rem;
  }
`;

export { AppContainer, Header };
