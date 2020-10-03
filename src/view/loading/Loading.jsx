import React from 'react';
import { CircularProgress, Typography } from '@material-ui/core';
import { CenteredFlex } from '../../component/containers/Containers';

export default function Loading() {
  return (
    <CenteredFlex>
      <CircularProgress />
      <Typography color="textSecondary">Loading...</Typography>
    </CenteredFlex>
  );
}
