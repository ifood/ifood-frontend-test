import React from 'react';
import styled from 'styled-components';
import Logo from './assets/images/spotifood-logo.png';

const H1 = styled.h1`
  font-size: 1.5em;
`;

function App() {
  return (
    <div>
      <header>
        <img src={Logo} alt="Logo marca Spotifood" width="500" />
      </header>
      <H1>spotifood</H1>
    </div>
  );
}

export default App;
