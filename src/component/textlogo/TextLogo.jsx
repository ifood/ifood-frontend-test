import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function TextLogo(props) {
  const { variant = 'h5' } = props;

  return (
    <Container>
      <Typography variant={variant} color="primary">
        SPOT
      </Typography>
      <Typography variant={variant} color="secondary">
        IFOOD
      </Typography>
    </Container>
  );
}

TextLogo.propTypes = {
  variant: PropTypes.string,
};
