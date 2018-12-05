import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactSpotifyLogin from 'react-spotify-login';
import styled from 'styled-components';

import backgroundImage from '../assets/unsplash.jpg';

interface IProps {
  clientId: string;
  redirectUrl: string;
  onSuccess: (token: string) => void;
}

const StyledContainer = styled.div`
  background: url(${backgroundImage});
  background-size: cover;
  position: absolute;
  height: 100%;
  width: 100%;

  h1 {
    padding-top: 10rem;
  }

  .button-holder {
    margin-top: 3rem;
  }
`;

export default (props: IProps) => {
  const handleSuccess = ({ access_token }: { access_token: string }) => {
    props.onSuccess(access_token);
  };
  const handleFailure = response => {
    console.log(response); // tslint:disable-line no-console
  };

  return (
    <StyledContainer>
      <div>
        <h1 className='title is-1 has-text-centered has-text-white has-text-weight-light is-uppercase'>
          Spotifood
        </h1>
        <div className='button-holder has-text-centered'>
          <ReactSpotifyLogin
            className='button is-large'
            clientId={props.clientId}
            redirectUri={props.redirectUrl}
            onSuccess={handleSuccess}
            onFailure={handleFailure}
          />
        </div>
        <a
          className='button is-small'
          style={{
            bottom: '1rem',
            position: 'absolute',
            right: '1rem',
          }}
          href='https://unsplash.com/@overdriv3?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge'
          target='_blank'
          rel='noopener noreferrer'
          title='Download free do whatever you want high-resolution photos from A. L.'
        >
          <span className='icon'>
            <Icon icon='camera' />
          </span>
          <span>A. L.</span>
        </a>
      </div>
    </StyledContainer>
  );
};
