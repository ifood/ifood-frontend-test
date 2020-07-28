import styled from 'styled-components';
import media from '../../styles/media-queries';

export const Main = styled.main`
  background-color: ${ props => props.theme.palette.black };
  color: ${ props => props.theme.palette.white };

  ${ media.mobile`
    background-color: red;
  `}
`;