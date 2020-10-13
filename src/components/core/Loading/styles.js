import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  margin: 0 auto;
  width: 2rem;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: var(--black-rbg);
`;

export const Svg = styled.div`
  width: 10rem;

  g:nth-child(1) > g path {
    fill: transparent;
  }
`;
