import styled from 'styled-components';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: white;
`;

const Header = styled.header`
  padding-bottom: 15px;
  box-shadow: 2px 4px 5px 0px rgba(138, 138, 138, 0.3);

  h1 {
    margin-top: 0px;
    text-align: center;
    padding: 1rem 0;
    color: #fa2d3b;
  }
`;

export { AppContainer, Header };
