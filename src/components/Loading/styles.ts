import styled from 'styled-components';

import CircularProgress from '@material-ui/core/CircularProgress';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #FAFAFA;
`;

const Progress = styled(CircularProgress)`
  margin-top: 24px;
`;

export { Container, Progress };
