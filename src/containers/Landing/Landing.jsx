import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import Banner from '../../assets/eating_banner.jpg';
import { SPOTIFY_AUTHORIZE_URL } from '../../common/contants';

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const Container = styled.div`
  display: flex;
  min-height: calc(100vh);
`;

const Background = styled.div`
  width: 100%;
  background-image: url(${Banner});
  background-position: center;
  background-size: cover;
  color: #bc2026;
`;

const TitleContainer = styled.div`
  margin: 0 15%;
  margin-top: 150px;
`;

const LoginButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 320px;
  line-height: 1.25em;
  padding: 2px 15px 0;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  border: none;
  width: 100%;
  height: 56px;
  border-radius: 500px;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin: 0;
  background-color: #1db954;
  color: white;
  cursor: pointer;
  text-decoration: none;
`;

const ButtonContainer = styled.div`
  margin-top: 150px;
`;

const Title = styled.h1`
  font-size: ${props => props.fontSize};
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.01562em;
  color: #bc2026;
`;

class Landing extends Component {
  getFontSize = () => {
    const { width } = this.props;
    let fontSize = '6rem';
    switch (width) {
      case 'xs':
      case 'sm':
        fontSize = '4rem';
        break;
      case 'md':
      case 'lg':
      case 'xl':
        fontSize = '6rem';
        break;
      default:
        break;
    }
    return fontSize;
  }

  render() {
    return (
      <Container>
        <Background>
          <TitleContainer>
            <Title fontSize={this.getFontSize()}>
              Spotifood
            </Title>
            <ButtonContainer>
              <LoginButton href={`${SPOTIFY_AUTHORIZE_URL}`}>
                Login with Spotify
              </LoginButton>
            </ButtonContainer>
          </TitleContainer>
        </Background>
      </Container>
    );
  }
}

Landing.propTypes = {
  width: PropTypes.string.isRequired,
};

export { Landing as RawLanding };

export default withWidth()(Landing);
