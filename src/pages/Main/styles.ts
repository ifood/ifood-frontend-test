import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;

  p.subtitle {
    margin-top: 56px;

    align-self: center;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    padding: 0 16px;
    }
  

`;

export const Content = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-self: center;

  h1 {
    max-width: 720px;
    /* font-size: 56px; */
  }
`;
