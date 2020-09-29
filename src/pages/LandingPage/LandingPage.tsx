import React from 'react';
import Button from '../../components/Button/Button';
import Logo from '../../assets/images/logo.svg';

import './LandingPage.scss';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page__content">
        <img src={Logo} alt="Logo" className="landing-page__logo" />
        <h1 className="landing-page__title">
          Escutar muda tudo
        </h1>
        <h2 className="landing-page__subtitle">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </h2>
        <Button label="Acessar" className="default" />
      </div>
    </div>
  )
};

export default LandingPage;
