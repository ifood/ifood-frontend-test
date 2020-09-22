import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

const Container = styled.div`
  min-width: 320px;
  height: 100vh;
  display: none;

  @media (min-width: 960px) {
    display: block;
  }
`;

const useStyles = makeStyles(() => ({
  drawerPaper: {
    width: 320,
  },
}));

export { Container, useStyles };
