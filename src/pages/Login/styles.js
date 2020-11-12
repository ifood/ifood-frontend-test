import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { gray, green } from '../../styles/colors';

export const Form = styled.form`
  width: 100%;
  max-width: 420px;
  padding: 15px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: ${gray};
  font-weight: bold;
`;

export const LoginButton = styled(Button)`
  background-color: ${green};
  border: 0;
  font-weight: 500;
  text-align: center;
`;
