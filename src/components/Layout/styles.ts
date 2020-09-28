import styled from "styled-components";

export const Content = styled.div`
  width: 85%;
  margin: 30px auto;

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 990px) {
     width: 100%;
  }
`;

export const SidebarMobileContainer = styled.div`
  position: absolute;
  background: rgba(0, 0 , 0, 0.8);
  width: 100vw;
  height: 100vh;
  z-index: 999;
  overflow: hidden
`;
