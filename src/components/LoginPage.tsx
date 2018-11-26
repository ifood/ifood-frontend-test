import React from 'react';
import ReactSpotifyLogin from 'react-spotify-login';

interface IProps {
  clientId: string;
  redirectUrl: string;
  onSuccess: (token: string) => void;
}

export default (props: IProps) => {
  const handleSuccess = ({ access_token }: { access_token: string }) => {
    props.onSuccess(access_token);
  };
  const handleFailure = response => {
    // TODO:
    console.log(response); // tslint:disable-line no-console
  };

  return (
    <ReactSpotifyLogin
      clientId={props.clientId}
      redirectUri={props.redirectUrl}
      onSuccess={handleSuccess}
      onFailure={handleFailure}
    />
  );
};
