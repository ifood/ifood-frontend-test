import Header from './components/Header';

import { Container } from './styles/container/Container';
import GlobalStyles from './styles/globalStyle';

function App() {
  return (
    <Container background>
      <GlobalStyles />
      <Header />
    </Container>
  );
}

export default App;
