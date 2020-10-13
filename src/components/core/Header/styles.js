import styled from "styled-components";
import media from "styled-media-query";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 10rem;
  background: var(--black-light);

  ${media.lessThan("medium")`
    padding: 1rem;
  `};
`;

export const Title = styled.h1`
  font-family: var(--font-family-gilroy);
`;

export const Span = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  text-align: right;
`;
