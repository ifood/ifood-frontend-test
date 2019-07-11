import React from 'react';
import { withRouter } from 'react-router-dom';

import { Button, Typography } from '@material-ui/core';
import { Wrapper } from './styles';

const NotFound404 = () => {
  return (
    <Wrapper>
      <Typography variant="h5" component="h2" className="lost-message">
        Parece que você se perdeu, não é mesmo?
      </Typography>
      <Button size="small" color="primary" variant="contained" target="_self" href="/">
        Voltar para diversão
      </Button>
    </Wrapper>
  );
};

export default withRouter(NotFound404);
