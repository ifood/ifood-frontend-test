import styled from 'styled-components';
import { MaxWidth, Media } from '../LayoutConstants';

const Content = styled.main`
  flex-grow: 1;
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;

  @media (min-width: ${Media.SMALL}) {
    width: 80%;
    max-width: ${MaxWidth};
    padding: 20px 0;
  }
`;

export default Content;
