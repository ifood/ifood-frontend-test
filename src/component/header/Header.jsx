import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  AppBar,
  Button,
  Slide,
  Toolbar,
  useScrollTrigger,
} from '@material-ui/core';
import { useAuthContext } from '../../auth/AuthContext';
import spotifyLogo from '../../images/spotifood.png';

const TitleContainer = styled.div`
  flex-grow: 1;
`;

const Image = styled.img`
  zoom: 0.1;
  padding-right: 10px;
`;

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function Header() {
  const auth = useAuthContext();

  return (
    <HideOnScroll>
      <AppBar color="primary">
        <Toolbar>
          <TitleContainer>
            <Image src={spotifyLogo} />
          </TitleContainer>
          <Button color="primary" variant="contained" onClick={auth?.logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
