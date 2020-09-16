import React from 'react';

import Logo from '../Logo';

import { Container, Progress } from './styles';

const Loading = () => (
  <Container>
    <Logo width="230px" color="red" />
    <Progress />
  </Container>
);

export default Loading;
