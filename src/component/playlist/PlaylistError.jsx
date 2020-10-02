import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { Error } from '@material-ui/icons';
import { CenteredFlex, LayoutContent } from '../containers/Containers';

const Content = styled(LayoutContent)`
  margin-top: 80px;
`;

function PlaylistError(props) {
  const { error } = props;

  return (
    <Content>
      <CenteredFlex>
        <Error color="primary" />
        <Typography color="textPrimary">{error}</Typography>
      </CenteredFlex>
    </Content>
  );
}

PlaylistError.propTypes = {
  error: PropTypes.string,
};

export default PlaylistError;
