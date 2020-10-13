import styled, { css } from "styled-components";
import media from "styled-media-query";

const secondary = css`
  background: transparent;
  border: 1px solid var(--primary);
  color: var(--primary);

  &:hover {
    background: var(--white-light);
    border-color: var(--white-light);
    color: var(--primary);
  }
`;

const primary = css`
  background: var(--red-gradient);
  background-size: 200% 100%;
  background-position: 0;

  &:hover {
    background-position: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin: ${({ margin }) => margin ?? "0"};
`;

export const ButtonContent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3rem;
  min-height: 4rem;
  min-width: 1.5rem;
  cursor: pointer;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--white);
  border-radius: 5rem;
  transition: all 0.3s ease-in-out;
  outline: none;

  opacity: ${({ opacity }) => opacity};
  cursor: ${({ cursor }) => cursor};

  ${({ type }) => (type === "primary" ? primary : secondary)}

  ${media.lessThan("medium")`
    min-width: auto;
    font-size: 1rem;
  `};
`;
