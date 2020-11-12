import styled from 'styled-components';
import { gray } from '../../styles/colors';

const NotFound = styled.div`
  padding: 20px;
  text-align: center;

  h2 {
    color: ${gray};
    font-weight: bold;
  }

  p {
    color: ${gray};
    font-weight: 300;
  }
`;

export default NotFound;
