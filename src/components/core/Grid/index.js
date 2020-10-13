import styled, { css } from "styled-components";

import authBackground from "assets/images/auth-background.jpg";

const authScreenStyle = css`
  background: url(${authBackground}) center no-repeat;
  background-size: cover;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    background: rgb(0 0 0 / 81%);
  }
`;

export const Main = styled.main`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 100%;
  min-height: 100vh;
  padding: 5rem 10rem;

  ${({ authScreen }) => !authScreen && authScreenStyle};
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: 2;
`;

export const Div = styled.div`
  width: 100%;
  height: auto;
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  flex-direction: ${({ row }) => (row ? "row" : "column")};
`;

export const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 6rem;
  grid-row-gap: 6rem;
`;

export const CustomColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${({ minmax }) => minmax}, 1fr)
  );
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`;
