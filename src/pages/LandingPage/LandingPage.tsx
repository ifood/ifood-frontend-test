import React, { useEffect } from 'react';
import Button from '../../components/Button/Button';
import Logo from '../../assets/images/logo.svg';
import useLogin from '../../hooks/useLogin';
import { RouteComponentProps } from 'react-router-dom';

import './LandingPage.scss';

const LandingPage = ({ history }: RouteComponentProps) => {
  const { goToLogin, hasToken } = useLogin();

  useEffect(() => {
    const token = hasToken();

    if (token) history.push('/playlists');
  }, [hasToken, history]);

  return (
    <div className="landing-page">
      <div className="landing-page__content">
        <img src={Logo} alt="Logo" className="landing-page__logo" />
        <h1 className="landing-page__title">
          Escutar muda tudo
        </h1>
        <h2 className="landing-page__subtitle">
          Acesse com sua conta no spotify e confira as playlists.
        </h2>
        <Button label="Acessar" className="default" onClick={goToLogin} />
      </div>
    </div>
  )
};

export default LandingPage;
