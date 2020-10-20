import styled from 'styled-components';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-grow: 1;
  width: 100%;
  flex-direction: column;
  background: white;
`;

const Header = styled.header`
  box-shadow: 2px 4px 5px 0px rgba(138, 138, 138, 0.3);
  background-color: #fa2d3b;
  padding-bottom: 1rem;
  h1 {
    margin-top: 0px;
    text-align: center;
    font-size: 3rem;
    padding: 1rem 0;
    color: white;
    transform: skew(-15deg);
    letter-spacing: 2px;
  }
`;

export { AppContainer, Header };
