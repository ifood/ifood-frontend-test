import React, { useEffect, useState } from 'react';

import { Image } from 'components/image';
import { Input } from 'components/input';
import { Label } from 'components/label';
import { Button } from 'components/button';
import { Wrapper } from 'components/wrapper';

import Logo from 'assets/images/spotifood-logo.png';

import { authorizeSpotifyUrl } from 'common/utils';

import * as S from './styles';

export const Home: React.FC = () => {
  const [clientId, setClientId] = useState(process.env.REACT_APP_SPOTIFY_CLIENT_ID);

  useEffect(() => {
    if (!!clientId) {
      window.location.href = authorizeSpotifyUrl(process.env.REACT_APP_SPOTIFY_CLIENT_ID);
    }

    localStorage.clear();
  }, []);

  const loginWithCredential = (clientId: string | undefined) => {
    window.location.href = authorizeSpotifyUrl(clientId);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    loginWithCredential(clientId);
  };

  return (
    <Wrapper>
      <header>
        <Image src={Logo} alt="Logo marca Spotifood" width="300" />
      </header>

      <S.Paragraph>Para prosseguir, preencha o campo abaixo.</S.Paragraph>

      <S.Card>
        <form onSubmit={handleSubmit}>
          <Label name="input-client-id">ClientId: </Label>
          <Input
            id="input-client-id"
            placeholder="Digite seu CLIENT_ID"
            value={clientId ? clientId : ''}
            type="text"
            onChange={(e) => setClientId(e.target.value)}
          />
          <Button>Prosseguir</Button>
        </form>
      </S.Card>
    </Wrapper>
  );
};
