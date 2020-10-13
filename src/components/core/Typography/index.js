import styled from "styled-components";
import media from "styled-media-query";

export const Title = styled.h2`
  letter-spacing: 0.03rem;
  text-align: left;
  font-family: var(--font-family-gilroy);
  font-weight: 800;
  color: var(--gray);

  margin: ${({ margin }) => margin ?? "0"};
  font-size: ${({ fontSize }) => fontSize ?? "7.4rem"};

  ${media.lessThan("medium")`
    font-size: 2rem;
  `};
`;

export const SubTitle = styled.h3`
  font-family: var(--font-family-gilroy);
  font-weight: bold;

  margin: ${({ margin }) => margin ?? "0"};
  font-size: ${({ fontSize }) => fontSize ?? "2.0rem"};
  color: var(--white);
`;

export const SmallTitle = styled.h4`
  font-weight: bold;
  color: var(--white);

  margin: ${({ margin }) => margin ?? "0"};
  font-size: ${({ fontSize }) => fontSize ?? "var(--font-size-default)"};
`;

export const Paragraph = styled.p`
  font-weight: normal;

  padding: ${({ padding }) => padding ?? "0"};
  margin: ${({ margin }) => margin ?? "0"};
  word-break: break-word;
  font-size: ${({ fontSize }) => fontSize ?? "1.8rem"};
  text-align: ${({ textAlign }) => textAlign ?? "initial"};

  color: var(--white);
`;

export const Color = styled.span`
  color: ${({ color }) => `var(--${color})`};
`;
