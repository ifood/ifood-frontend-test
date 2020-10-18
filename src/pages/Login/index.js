import React from 'react';

import { Container, Header, Ribbon, HeroSection } from './styles';

import spotifood from '../../assets/images/icon_spotifood.png';
import spotifood2x from '../../assets/images/icon_spotifood@2x.png';

function Login() {
  return (
    <Container>
      <Header>
        <div className="header-wrapper">
          <div className="header-content">
            <a href="/" className="header-title">
              Spotifood
            </a>
            <a href="/" className="button button-small">
              Entrar com Spotify
            </a>
          </div>
        </div>
      </Header>
      <Ribbon>
        <div className="ribbon-content">
          <span>
            Ifood e Spotify. Juntamos seus aplicativos favoritos para
            proporcionar uma experiência incrível para você.
          </span>
          <a href="/" className="ribbon-link more">
            Saiba mais
          </a>
        </div>
      </Ribbon>
      <HeroSection>
        <div className="section-content">
          <img
            src={spotifood}
            srcSet={`${spotifood} 300w, ${spotifood2x} 768w, ${spotifood2x} 1280w`}
            alt="Spotifood Logo"
            className="icon-spotifood"
          />
          <h1 className="hero-headline">
            Nunca foi tão fácil escutar suas <span>músicas favoritas</span>
          </h1>
          <a href="/" className="button button-large button-red">
            Faça um teste gratuito
          </a>
          <p className="app-store-caption">
            O Spotifood também está disponível para aparelhos Android e iOS.
          </p>
        </div>
        <div className="gadgets" />
      </HeroSection>
    </Container>
  );
}

export default Login;
