import React from 'react';

 import { Container, Filters } from './styles';

const Main: React.FC = () => {

  return (
    <Container>
      <h1>Spotifood</h1>
      <Filters>
        <input type="text"/>
        <select name="country" id="country"></select>
        <input type="datetime-local"/>
        <select name="count" id="count"></select>
      </Filters>
    </Container>
  )
}

export default Main;