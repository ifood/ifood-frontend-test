import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

const Container = styled.div`
  width: 320px;
  height: 100vh;
`;

const useStyles = makeStyles(() => ({
  drawerPaper: {
    width: 320,
  },
}));

export { Container, useStyles };
