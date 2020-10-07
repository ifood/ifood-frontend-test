import React, { useEffect, useState } from 'react';

import { Input } from 'components/input';
import { Label } from 'components/label';
import { Button } from 'components/button';
import Logo from 'assets/images/spotifood-logo.png';
import { authorizeSpotifyUrl } from 'common/utils';

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
    <>
      <header>
        <img src={Logo} alt="Logo marca Spotifood" width="500" />
      </header>
      <form onSubmit={handleSubmit}>
        <p>Para prosseguir, preencha o campo abaixo.</p>
        <Label name="input-client-id">ClientId: </Label>
        <Input
          id="input-client-id"
          value={clientId ? clientId : ''}
          type="text"
          onChange={(e) => setClientId(e.target.value)}
        />
        <Button>Prosseguir</Button>
      </form>
    </>
  );
};
