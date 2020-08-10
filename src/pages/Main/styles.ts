import styled from "styled-components";

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;

  h1 {
    max-width: 720px;
    font-size: 56px;
  }
  p {
    margin-top: 56px;
    align-self: center;
  }

`;


