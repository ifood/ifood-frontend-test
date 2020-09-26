import styled from "styled-components";

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  z-index: 1;

  background: rgba(0, 0 , 0, 0.8);
  width: 100vw;
  height: 100vh;
`;
