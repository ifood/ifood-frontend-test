import styled from 'styled-components';
import colors from '../../assets/colors';

import gadgetsImage from '../../assets/images/gadgets.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 52px;
  background-color: ${colors.white};

  .header-wrapper {
    flex: 1;
    margin: 0 auto;
    max-width: 980px;
    padding-left: 20px;
    padding-right: 20px;

    .header-content {
      display: flex;
      justify-content: space-between;

      a.header-title {
        color: ${colors.dark};
        font-size: 20px;
        font-weight: 600;
        letter-spacing: -0.3px;

        :hover {
          opacity: 1;
        }
      }
    }
  }
`;

export const Ribbon = styled.div`
  background-color: ${colors.lighter};
  width: 100%;

  .ribbon-content {
    margin: 0 auto;
    max-width: 980px;
    text-align: center;
    padding: 15px 20px;

    span {
      font-size: 14px;
      font-weight: 400;
    }

    .ribbon-link {
      color: #06c;
      font-size: 14px;
      margin-left: 5px;
      white-space: nowrap;

      :hover {
        opacity: 1;
        text-decoration: underline;
      }
    }
  }
`;

export const HeroSection = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
  background-color: ${colors.white};

  .section-content {
    flex: 1;
    margin: 0 auto;
    max-width: 980px;
    text-align: center;
    padding: 40px 20px;

    .icon-spotifood {
      width: 65px;
      height: 65px;
      padding-bottom: 15px;
    }

    .hero-headline {
      font-size: 44px;
      line-height: 1.09;
      font-weight: 600;
      letter-spacing: -0.015em;
      margin-bottom: 40px;

      span {
        color: ${colors.primary};
      }
    }

    .app-store-caption {
      font-size: 12px;
      font-weight: 400;
      line-height: 1.3;
      letter-spacing: -0.01em;
      text-align: center;
      margin-top: 20px;
    }
  }

  .gadgets {
    background-image: url(${gadgetsImage});
    background-repeat: no-repeat;
    height: 255px;
    background-position: 20%;
    display: none;
  }

  @media screen and (min-width: 768px) {
    .section-content > .app-store-caption {
      margin-top: 30px;
    }

    .gadgets {
      display: initial;
    }
  }

  @media screen and (max-width: 767px) {
    .section-content > .button-red {
      font-size: 16px;
      font-weight: 600;
      line-height: 1.4;
      padding: 16px 28px;
    }
  }

  @media screen and (min-width: 860px) {
    .section-content {
      padding: 40px 20px 20px;

      .icon-spotifood {
        width: 75px;
        height: 75px;
        padding-bottom: 20px;
      }

      .hero-headline {
        font-size: 64px;
        line-height: 1;
      }
    }
  }

  @media screen and (min-width: 1068px) {
    .section-content {
      .icon-spotifood {
        width: 90px;
        height: 90px;
        padding-bottom: 20px;
      }

      .hero-headline {
        font-size: 80px;
        line-height: 1;
      }
    }
  }

  @media screen and (min-width: 1600px) {
    .gadgets {
      background-position: 100%;
    }
  }
`;
