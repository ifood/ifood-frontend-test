import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

const Form = styled.form`
  padding: 24px;
  height: 100%;
`;

const useStyles = makeStyles(() => ({
  filterField: {
    marginBottom: 16,
  },
}));

export { Form, useStyles };
