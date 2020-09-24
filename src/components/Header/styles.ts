import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;

  h3 {
    letter-spacing: 1px;
    font-size: 20px;
  }
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    margin-left: 10px;
  }
`;

export const HeaderTitle = styled.div`
  margin: 80px 0;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 850px) {
    justify-content: center;

    h1 {
      text-align: center;
    }
  }

  h1 {
    font-size: min(60px, 12vw);
  }
`;
